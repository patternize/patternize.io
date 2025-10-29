---
title: Basics
sidebar_position: 1
---
## Basic Derivatives
| Function | Derivative |
|:--------:|:----------:|
| $f(x) = c$ (constant) | $f'(x) = 0$ |
| $f(x) = x^n$ | $f'(x) = nx^{n-1}$ |
| $f(x) = e^x$ | $f'(x) = e^x$ |
| $f(x) = \ln(x)$ | $f'(x) = \frac{1}{x}$ |
| $f(x) = a^x$ | $f'(x) = a^x \ln(a)$ |
| $f(x) = \log_a(x)$ | $f'(x) = \frac{1}{x \ln(a)}$ |
| $f(x) = g(h(x))$ (chain rule) | $f'(x) = g'(h(x)) \cdot h'(x)$ |
| $f(x) = u(x) \cdot v(x)$ (product rule) | $f'(x) = u'(x) \cdot v(x) + u(x) \cdot v'(x)$ |
| $f(x) = \frac{u(x)}{v(x)}$ (quotient rule) | $f'(x) = \frac{u'(x) \cdot v(x) - u(x) \cdot v'(x)}{v(x)^2}$ |


## Logarithm and Exponential Properties


| Logarithm Rules                         | Exponential Rules                     |
|:----------------------------------------:|:-------------------------------------:|
| $\ln(ab) = \ln(a) + \ln(b)$             | $e^a \cdot e^b = e^{a+b}$             |
| $\ln\left(\frac{a}{b}\right) = \ln(a) - \ln(b)$ | $\frac{e^a}{e^b} = e^{a-b}$     |
| $\ln(a^b) = b \ln(a)$                   | $(e^a)^b = e^{ab}$                    |
| $\ln(e) = 1$                            | $e^0 = 1$                             |
| $\ln(1) = 0$                            | $e^{\ln(x)} = x$|
| $\ln(e^x) = x$                          | $e^{\ln(a) + \ln(b)} = ab$            |
| $\ln\left(\prod_{i} a_i\right) = \sum_{i} \ln(a_i)$ | $\prod_{i} e^{f(x_i)} = e^{\sum_{i} f(x_i)}$ |


## Important Derivatives for ML

**Sigmoid Function**:

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

$$
\sigma'(x) = \sigma(x)(1 - \sigma(x))
$$

**Softmax Function** (for class $i$):

$$
\text{softmax}(x_i) = \frac{e^{x_i}}{\sum_{j} e^{x_j}}
$$

**Log-Likelihood**:

$$
\frac{d}{dx}\ln(f(x)) = \frac{f'(x)}{f(x)}
$$

## Partial Derivatives

For a function $f(x, y)$ of multiple variables:

$$
\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}
$$

**Example**: $f(x, y) = x^2 + 3xy + y^2$

$$
\begin{align}
\frac{\partial f}{\partial x} &= 2x + 3y \\
\frac{\partial f}{\partial y} &= 3x + 2y
\end{align}
$$

## Gradient

The gradient is a vector of all partial derivatives:

$$
\nabla f = \begin{bmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \\ \vdots \\ \frac{\partial f}{\partial x_n} \end{bmatrix}
$$

The gradient points in the direction of steepest ascent, which is why gradient descent moves in the negative gradient direction to minimize loss functions.

## Summary

Calculus is essential for:
- **Gradient Descent**: Computing how to update model parameters
- **Backpropagation**: Calculating gradients in neural networks
- **Optimization**: Finding minima/maxima of loss functions
- **Understanding Convergence**: Analyzing how algorithms improve over iterations

Master these concepts and you'll understand the mathematical foundation of how machine learning models learn! 🚀

