---
title: Introduction
sidebar_position: 2
hide_table_of_contents: true
---

# Introduction

Supervised learning is a type of machine learning where the algorithm learns from labeled training data to make predictions or decisions without being explicitly programmed to perform the task.

## Formal Definitions

### Hypothesis, Model, and Prediction Function

A **hypothesis** or **model** or **prediction function** is a function $h : \mathcal{X} \rightarrow \mathcal{Y}$ that maps from the input space $\mathcal{X}$ to the output space $\mathcal{Y}$.

### Training Set

A **training set** is a set of pairs $\{(x^{(1)}, y^{(1)}), ..., (x^{(n)}, y^{(n)})\}$ such that $x^{(i)} \in \mathcal{X}$ and $y^{(i)} \in \mathcal{Y}$ for $i \in \{1, ..., n\}$.

The value $n$ is the **training set size**.

### Goal of Learning

**Goal**: Use the training set to find (= **learn**) a *good* model $h$.

- What "good" means is not always easy to define (part of the modeling challenge).
- We will want to use the model $h$ on **new data**, not the training set (**generalization**).

### Problem Types

**If $\mathcal{Y}$ is continuous**, then we call it a **regression** problem.

**If $\mathcal{Y}$ is discrete**, then we call it a **classification** problem (*binary* or *multi-class*).

## What is Supervised Learning?

In supervised learning, we have:
- **Input variables** ($x$): Features or predictors
- **Output variable** ($y$): Target or label
- **Training data**: A set of examples $\{(x^{(1)}, y^{(1)}), (x^{(2)}, y^{(2)}), ..., (x^{(n)}, y^{(n)})\}$

The goal is to learn a function $h: \mathcal{X} \rightarrow \mathcal{Y}$ (called a hypothesis) that maps inputs to outputs, such that $h(x)$ is a good predictor for the corresponding value of $y$.

## Types of Supervised Learning

### 1. Regression
When the target variable is **continuous**:
- Predicting house prices
- Forecasting stock prices
- Estimating temperature

**Example**: Predicting a house price based on its size:
$$
h(x) = \theta_0 + \theta_1 x
$$

### 2. Classification
When the target variable is **discrete** (categorical):
- Email spam detection (spam/not spam)
- Image recognition (cat/dog/bird)
- Disease diagnosis (positive/negative)

**Example**: Binary classification with logistic regression:
$$
h(x) = \frac{1}{1 + e^{-(\theta_0 + \theta_1 x)}}
$$

## The Learning Process

1. **Collect training data**: Gather labeled examples
2. **Choose a model**: Select an appropriate algorithm (linear regression, decision tree, neural network, etc.)
3. **Train the model**: Use the training data to learn the parameters
4. **Evaluate**: Test the model on unseen data
5. **Deploy**: Use the model to make predictions on new data

## Key Concepts

### Loss Function
Measures how well our hypothesis $h(x)$ predicts the true value $y$. For example, the **Mean Squared Error (MSE)**:

$$
J(\theta) = \frac{1}{2n} \sum_{i=1}^{n} (h_\theta(x^{(i)}) - y^{(i)})^2
$$

### Optimization
The process of finding the parameters $\theta$ that minimize the loss function. Common methods include:
- **Gradient Descent**: Iteratively update parameters in the direction that reduces the loss
- **Normal Equation**: Analytical solution for linear regression
- **Stochastic Gradient Descent (SGD)**: Update parameters using one example at a time

### Gradient Descent Update Rule
$$
\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)
$$

where $\alpha$ is the learning rate.

## Overfitting vs Underfitting

- **Underfitting**: Model is too simple and cannot capture the underlying pattern in the data
- **Overfitting**: Model is too complex and fits the training data too well, including noise
- **Good fit**: Model generalizes well to unseen data

### Addressing Overfitting
1. **Regularization**: Add penalty terms to the loss function
2. **Cross-validation**: Use part of the training data for validation
3. **More training data**: Helps the model learn the true underlying pattern
4. **Feature selection**: Remove irrelevant features

## Train/Validation/Test Split

- **Training set** (60-80%): Used to train the model
- **Validation set** (10-20%): Used to tune hyperparameters and prevent overfitting
- **Test set** (10-20%): Used to evaluate final model performance

## Evaluation Metrics

### For Regression
- Mean Squared Error (MSE)
- Root Mean Squared Error (RMSE)
- Mean Absolute Error (MAE)
- R² Score

### For Classification
- Accuracy
- Precision, Recall, F1-Score
- Confusion Matrix
- ROC-AUC

## Next Steps

In the following sections, we'll explore:
1. **Linear Models**: Linear regression, logistic regression, and regularization
2. **Generative Learning**: Gaussian Discriminant Analysis and Naive Bayes
3. Advanced topics and real-world applications

---

**Key Takeaway**: Supervised learning uses labeled data to learn a mapping from inputs to outputs, enabling predictions on new, unseen data.

