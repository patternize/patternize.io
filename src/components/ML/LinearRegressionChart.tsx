import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts-gl';

interface DataPoint {
  distanceFromStanford: number; // in miles
  roomSize: number; // in sq ft (hundreds)
  price: number; // in millions
}

// Generate Palo Alto housing data
// Price = base + (distance coefficient * distance) + (room coefficient * room size) + noise
const generatePaloAltoHousingData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const basePrice = 1.5; // Base price 1.5M
  const distanceCoeff = -0.4; // Closer to Stanford = more expensive
  const roomCoeff = 0.6; // Larger rooms = more expensive
  
  for (let i = 0; i < 50; i++) {
    const distance = Math.random() * 5; // 0-5 miles from Stanford
    const roomSize = Math.random() * 3 + 1; // 1-4 (representing 100-400 sq ft per room)
    const noise = (Math.random() - 0.5) * 0.4;
    const price = basePrice + distanceCoeff * distance + roomCoeff * roomSize + noise;
    
    data.push({
      distanceFromStanford: distance,
      roomSize: roomSize,
      price: Math.max(0.5, price) // Minimum 0.5M
    });
  }
  
  return data;
};

// Gradient Descent for Multiple Linear Regression (2 features)
const calculateGradientDescent = (
  data: DataPoint[], 
  alpha: number, 
  iterations: number
) => {
  const n = data.length;
  let theta0 = 0; // intercept
  let theta1 = 0; // distance coefficient
  let theta2 = 0; // room size coefficient
  
  // Run gradient descent
  for (let iter = 0; iter < iterations; iter++) {
    let grad0 = 0;
    let grad1 = 0;
    let grad2 = 0;
    
    // Calculate gradients
    for (let i = 0; i < n; i++) {
      const prediction = theta0 + theta1 * data[i].distanceFromStanford + theta2 * data[i].roomSize;
      const error = prediction - data[i].price;
      grad0 += error;
      grad1 += error * data[i].distanceFromStanford;
      grad2 += error * data[i].roomSize;
    }
    
    grad0 /= n;
    grad1 /= n;
    grad2 /= n;
    
    // Update parameters
    theta0 -= alpha * grad0;
    theta1 -= alpha * grad1;
    theta2 -= alpha * grad2;
  }
  
  // Calculate MSE
  let mse = 0;
  for (let i = 0; i < n; i++) {
    const predicted = theta0 + theta1 * data[i].distanceFromStanford + theta2 * data[i].roomSize;
    mse += Math.pow(data[i].price - predicted, 2);
  }
  mse /= n;
  
  return { theta0, theta1, theta2, mse };
};

// Generate surface data for the regression plane
const generateSurfaceData = (theta0: number, theta1: number, theta2: number) => {
  const surfaceData: any[] = [];
  const distanceRange = [0, 5];
  const roomRange = [1, 4];
  const steps = 30;
  
  for (let i = 0; i <= steps; i++) {
    for (let j = 0; j <= steps; j++) {
      const distance = distanceRange[0] + (i / steps) * (distanceRange[1] - distanceRange[0]);
      const room = roomRange[0] + (j / steps) * (roomRange[1] - roomRange[0]);
      const price = theta0 + theta1 * distance + theta2 * room;
      surfaceData.push([distance, room, price]);
    }
  }
  
  return surfaceData;
};

const LinearRegressionChart: React.FC = () => {
  const [data] = useState<DataPoint[]>(() => generatePaloAltoHousingData());
  const [alpha, setAlpha] = useState<number>(0.1);
  const [iterations, setIterations] = useState<number>(0);
  const [regression, setRegression] = useState<{
    theta0: number;
    theta1: number;
    theta2: number;
    mse: number;
  }>({ theta0: 0, theta1: 0, theta2: 0, mse: 0 });

  useEffect(() => {
    const result = calculateGradientDescent(data, alpha, iterations);
    setRegression(result);
  }, [data, alpha, iterations]);

  const surfaceData = generateSurfaceData(regression.theta0, regression.theta1, regression.theta2);

  const option = {
    tooltip: {
      formatter: (params: any) => {
        if (params.seriesName === 'Housing Data') {
          const [distance, roomSize, price] = params.value;
          return `
            <div style="padding: 8px;">
              <strong style="color: #111827;">🏡 Housing Data</strong><br/>
              <span style="color: #6b7280;">Distance from Stanford:</span> <strong>${distance.toFixed(2)} miles</strong><br/>
              <span style="color: #6b7280;">Room Size:</span> <strong>${roomSize.toFixed(2)} (100s sq ft)</strong><br/>
              <span style="color: #6b7280;">Price:</span> <strong>$${price.toFixed(2)}M</strong>
            </div>
          `;
        }
        return params.seriesName;
      }
    },
    backgroundColor: 'transparent',
    visualMap: {
      show: true,
      dimension: 2,
      min: 0.5,
      max: 3.5,
      inRange: {
        color: [
          '#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8',
          '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'
        ]
      },
      text: ['High Price', 'Low Price'],
      textStyle: {
        color: '#333'
      },
      top: 20,
      right: 20
    },
    xAxis3D: {
      type: 'value',
      name: 'Distance from Stanford (miles)',
      nameTextStyle: {
        color: '#333'
      },
      axisLabel: {
        color: '#666'
      }
    },
    yAxis3D: {
      type: 'value',
      name: 'Room Size (100s sq ft)',
      nameTextStyle: {
        color: '#333'
      },
      axisLabel: {
        color: '#666'
      }
    },
    zAxis3D: {
      type: 'value',
      name: 'Price ($M)',
      nameTextStyle: {
        color: '#333'
      },
      axisLabel: {
        color: '#666'
      },
      min: 0,
      max: 4
    },
    grid3D: {
      viewControl: {
        autoRotate: false,
        distance: 200
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true
        },
        ambient: {
          intensity: 0.3
        }
      }
    },
    series: [
      {
        name: 'Housing Data',
        type: 'scatter3D',
        data: data.map(d => [d.distanceFromStanford, d.roomSize, d.price]),
        symbolSize: 8,
        itemStyle: {
          color: '#5470ff',
          opacity: 0.8
        },
        emphasis: {
          itemStyle: {
            color: '#91cc75'
          }
        }
      },
      {
        name: 'Regression Plane',
        type: 'surface',
        data: surfaceData,
        shading: 'color',
        itemStyle: {
          opacity: 0.7
        },
        wireframe: {
          show: false
        }
      }
    ]
  };

  return (
    <div style={{ 
      width: '100%', 
      padding: '20px', 
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: '#f9fafb',
      marginBottom: '20px'
    }}>
      <div style={{
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '15px',
        color: '#111827'
      }}>
        Palo Alto Housing Prices: 3D Linear Regression
      </div>
      
      <ReactECharts 
        option={option} 
        style={{ height: '500px', width: '100%' }}
        opts={{ renderer: 'canvas' }}
      />
      
      <div style={{ marginTop: '20px', padding: '0 20px' }}>
        {/* Sliders side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '15px' }}>
          {/* Learning Rate Control */}
          <div>
            <label 
              htmlFor="alpha-slider" 
              style={{ 
                display: 'block', 
                marginBottom: '8px',
                fontWeight: '600',
                fontSize: '14px',
                color: '#374151'
              }}
            >
              Learning Rate (α): {alpha.toFixed(3)}
            </label>
            <input
              id="alpha-slider"
              type="range"
              min="0.01"
              max="0.15"
              step="0.01"
              value={alpha}
              onChange={(e) => setAlpha(parseFloat(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '5px',
                background: '#d1d5db',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#6b7280',
              marginTop: '4px'
            }}>
              <span>0.01 (Slow)</span>
              <span>0.15 (Fast)</span>
            </div>
          </div>

          {/* Iterations Control */}
          <div>
            <label 
              htmlFor="steps-slider" 
              style={{ 
                display: 'block', 
                marginBottom: '8px',
                fontWeight: '600',
                fontSize: '14px',
                color: '#374151'
              }}
            >
              Iterations: {iterations}
            </label>
            <input
              id="steps-slider"
              type="range"
              min="0"
              max="200"
              step="5"
              value={iterations}
              onChange={(e) => setIterations(parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '5px',
                background: '#d1d5db',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#6b7280',
              marginTop: '4px'
            }}>
              <span>0 (None)</span>
              <span>200 (Converged)</span>
            </div>
          </div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '15px',
          marginTop: '20px'
        }}>
          <div style={{ 
            padding: '12px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
              Intercept (θ₀)
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>
              ${regression.theta0.toFixed(3)}M
            </div>
          </div>
          
          <div style={{ 
            padding: '12px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
              Distance (θ₁)
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>
              {regression.theta1.toFixed(3)}
            </div>
          </div>
          
          <div style={{ 
            padding: '12px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
              Room Size (θ₂)
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>
              {regression.theta2.toFixed(3)}
            </div>
          </div>
          
          <div style={{ 
            padding: '12px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
              MSE
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>
              {regression.mse.toFixed(4)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearRegressionChart;
