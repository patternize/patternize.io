# Probability and Statistics

This guide covers the essential probability and statistics concepts needed for machine learning, including distributions, expected values, Bayes' theorem, and maximum likelihood estimation.

## Probability Basics

**Probability Rules**:

$$
\begin{align}
P(A \cup B) &= P(A) + P(B) - P(A \cap B) \\
P(A \cap B) &= P(A|B)P(B) = P(B|A)P(A)
\end{align}
$$

**Conditional Probability**:

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

**Independence**: $P(A \cap B) = P(A)P(B)$

## Bayes' Theorem

$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)}
$$

**Extended Form**:

$$
P(A|B) = \frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|\neg A)P(\neg A)}
$$

**ML Context** (posterior, likelihood, prior, evidence):

$$
P(\theta|D) = \frac{P(D|\theta)P(\theta)}{P(D)}
$$

## Expected Value and Variance

**Expected Value (Mean)**:

$$
\mathbb{E}[X] = \mu = \sum_{i} x_i P(x_i) \quad \text{(discrete)}
$$

$$
\mathbb{E}[X] = \int x f(x) dx \quad \text{(continuous)}
$$

**Properties**:
- $\mathbb{E}[aX + b] = a\mathbb{E}[X] + b$
- $\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y]$

**Variance**:

$$
\text{Var}(X) = \sigma^2 = \mathbb{E}[(X - \mu)^2] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
$$

**Properties**:
- $\text{Var}(aX + b) = a^2\text{Var}(X)$
- If $X$ and $Y$ are independent: $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$

**Standard Deviation**: $\sigma = \sqrt{\text{Var}(X)}$

**Covariance**:

$$
\text{Cov}(X, Y) = \mathbb{E}[(X - \mu_X)(Y - \mu_Y)] = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]
$$

**Correlation**:

$$
\rho_{XY} = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y}
$$

where $-1 \leq \rho \leq 1$.

## Common Probability Distributions

### Bernoulli Distribution

Models a single binary trial (coin flip).

$$
P(X = x) = p^x(1-p)^{1-x}, \quad x \in \{0, 1\}
$$

- **Mean**: $\mathbb{E}[X] = p$
- **Variance**: $\text{Var}(X) = p(1-p)$

### Binomial Distribution

Number of successes in $n$ Bernoulli trials.

$$
P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}
$$

- **Mean**: $\mathbb{E}[X] = np$
- **Variance**: $\text{Var}(X) = np(1-p)$

### Gaussian (Normal) Distribution

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$

Notation: $X \sim \mathcal{N}(\mu, \sigma^2)$

- **Mean**: $\mathbb{E}[X] = \mu$
- **Variance**: $\text{Var}(X) = \sigma^2$

**Standard Normal**: $\mathcal{N}(0, 1)$

**Properties**:
- Linear combinations of Gaussians are Gaussian
- If $X \sim \mathcal{N}(\mu, \sigma^2)$, then $aX + b \sim \mathcal{N}(a\mu + b, a^2\sigma^2)$

### Multivariate Gaussian

$$
f(\mathbf{x}) = \frac{1}{(2\pi)^{n/2}|\boldsymbol{\Sigma}|^{1/2}} \exp\left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^T\boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)
$$

Notation: $\mathbf{X} \sim \mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$

- **Mean**: $\mathbb{E}[\mathbf{X}] = \boldsymbol{\mu}$
- **Covariance**: $\text{Cov}(\mathbf{X}) = \boldsymbol{\Sigma}$

### Exponential Distribution

Models time between events in a Poisson process.

$$
f(x) = \lambda e^{-\lambda x}, \quad x \geq 0
$$

- **Mean**: $\mathbb{E}[X] = \frac{1}{\lambda}$
- **Variance**: $\text{Var}(X) = \frac{1}{\lambda^2}$

### Uniform Distribution

$$
f(x) = \frac{1}{b-a}, \quad x \in [a, b]
$$

- **Mean**: $\mathbb{E}[X] = \frac{a+b}{2}$
- **Variance**: $\text{Var}(X) = \frac{(b-a)^2}{12}$

## Maximum Likelihood Estimation (MLE)

Given data $D = \{x_1, ..., x_n\}$ and model parameter $\theta$:

**Likelihood**:

$$
L(\theta) = P(D|\theta) = \prod_{i=1}^n P(x_i|\theta)
$$

**Log-Likelihood** (easier to work with):

$$
\ell(\theta) = \log L(\theta) = \sum_{i=1}^n \log P(x_i|\theta)
$$

**MLE**: Find $\theta$ that maximizes $\ell(\theta)$:

$$
\hat{\theta}_{MLE} = \arg\max_\theta \ell(\theta)
$$

**Example**: For Gaussian $\mathcal{N}(\mu, \sigma^2)$:

$$
\hat{\mu}_{MLE} = \frac{1}{n}\sum_{i=1}^n x_i, \quad \hat{\sigma}^2_{MLE} = \frac{1}{n}\sum_{i=1}^n (x_i - \hat{\mu})^2
$$
