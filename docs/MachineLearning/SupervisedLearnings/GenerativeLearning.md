# Generative Learning Algorithms

Generative learning algorithms take a different approach compared to discriminative algorithms. Instead of learning $P(y|x)$ directly (the probability of $y$ given $x$), generative algorithms model:

1. $P(x|y)$: The probability of features $x$ given class $y$
2. $P(y)$: The prior probability of each class

Then use **Bayes' Rule** to compute $P(y|x)$:

$$
P(y|x) = \frac{P(x|y)P(y)}{P(x)}
$$

## Discriminative vs Generative

### Discriminative Algorithms
- Learn $P(y|x)$ directly
- Examples: Logistic Regression, SVM, Neural Networks
- Focus on the decision boundary

### Generative Algorithms
- Model $P(x|y)$ and $P(y)$
- Examples: Gaussian Discriminant Analysis, Naive Bayes
- Can generate new data samples
- Often work well with less training data

## Gaussian Discriminant Analysis (GDA)

GDA assumes that $P(x|y)$ follows a **multivariate Gaussian distribution**.

### Multivariate Gaussian Distribution

For a random vector $x \in \mathbb{R}^n$:

$$
P(x) = \frac{1}{(2\pi)^{n/2}|\Sigma|^{1/2}} \exp\left(-\frac{1}{2}(x-\mu)^T\Sigma^{-1}(x-\mu)\right)
$$

where:
- $\mu \in \mathbb{R}^n$ is the mean vector
- $\Sigma \in \mathbb{R}^{n \times n}$ is the covariance matrix
- $|\Sigma|$ is the determinant of $\Sigma$

We write this as $x \sim \mathcal{N}(\mu, \Sigma)$.

### GDA Model for Binary Classification

For $y \in \{0, 1\}$:

$$
\begin{align}
y &\sim \text{Bernoulli}(\phi) \\
x|y=0 &\sim \mathcal{N}(\mu_0, \Sigma) \\
x|y=1 &\sim \mathcal{N}(\mu_1, \Sigma)
\end{align}
$$

Parameters to estimate:
- $\phi = P(y=1)$: Prior probability
- $\mu_0$: Mean of class 0
- $\mu_1$: Mean of class 1
- $\Sigma$: Shared covariance matrix

### Maximum Likelihood Estimation

Given training data $\{(x^{(i)}, y^{(i)})\}_{i=1}^m$, the parameters are:

$$
\begin{align}
\phi &= \frac{1}{m} \sum_{i=1}^{m} \mathbb{1}\{y^{(i)}=1\} \\
\mu_0 &= \frac{\sum_{i=1}^{m} \mathbb{1}\{y^{(i)}=0\} x^{(i)}}{\sum_{i=1}^{m} \mathbb{1}\{y^{(i)}=0\}} \\
\mu_1 &= \frac{\sum_{i=1}^{m} \mathbb{1}\{y^{(i)}=1\} x^{(i)}}{\sum_{i=1}^{m} \mathbb{1}\{y^{(i)}=1\}} \\
\Sigma &= \frac{1}{m} \sum_{i=1}^{m} (x^{(i)} - \mu_{y^{(i)}})(x^{(i)} - \mu_{y^{(i)}})^T
\end{align}
$$

### Making Predictions

To classify a new example $x$, compute:

$$
\arg\max_y P(y|x) = \arg\max_y \frac{P(x|y)P(y)}{P(x)} = \arg\max_y P(x|y)P(y)
$$

Since $P(x)$ is the same for all classes, we can ignore it.

### GDA vs Logistic Regression

- **GDA** makes stronger assumptions (Gaussian distribution)
- If assumptions are correct, GDA is more efficient (needs less data)
- **Logistic regression** is more robust and works well even if assumptions are violated
- GDA decision boundary is **linear** (same as logistic regression)

## Naive Bayes

Naive Bayes is particularly useful when features are **discrete** (e.g., text classification, spam detection).

### The Naive Bayes Assumption

**Assumption**: Features are conditionally independent given the class label.

For features $x_1, x_2, ..., x_n$:

$$
P(x_1, ..., x_n|y) = P(x_1|y) \cdot P(x_2|y) \cdot ... \cdot P(x_n|y) = \prod_{j=1}^{n} P(x_j|y)
$$

This assumption is "naive" because features are often correlated, but it works surprisingly well in practice!

### Naive Bayes Classifier

Using Bayes' rule:

$$
P(y|x) = \frac{P(x|y)P(y)}{P(x)} = \frac{P(y) \prod_{j=1}^{n} P(x_j|y)}{P(x)}
$$

Prediction:

$$
\hat{y} = \arg\max_y P(y) \prod_{j=1}^{n} P(x_j|y)
$$

### Types of Naive Bayes

#### 1. Multinomial Naive Bayes
For **discrete** features (e.g., word counts in text):

$$
P(x_j|y) = \frac{\text{count}(x_j, y) + \alpha}{\text{count}(y) + \alpha n}
$$

where $\alpha$ is a smoothing parameter (Laplace smoothing).

**Use case**: Text classification, document categorization

#### 2. Gaussian Naive Bayes
For **continuous** features (assumes Gaussian distribution):

$$
P(x_j|y) = \frac{1}{\sqrt{2\pi\sigma_y^2}} \exp\left(-\frac{(x_j - \mu_y)^2}{2\sigma_y^2}\right)
$$

**Use case**: Any problem with continuous features

#### 3. Bernoulli Naive Bayes
For **binary** features:

$$
P(x_j|y) = P(x_j=1|y) \cdot x_j + (1 - P(x_j=1|y)) \cdot (1-x_j)
$$

**Use case**: Text classification with binary occurrence features

### Laplace Smoothing

To avoid zero probabilities for unseen feature-class combinations, we add a small constant $\alpha$ (typically 1):

$$
P(x_j|y) = \frac{\text{count}(x_j, y) + \alpha}{\text{count}(y) + \alpha n}
$$

## Example: Spam Classification

Let's classify emails as spam or not spam using Naive Bayes.

### Setup
- Vocabulary: 10,000 words
- Each email is represented as a vector $x \in \{0,1\}^{10000}$
- $x_j = 1$ if word $j$ appears in the email, 0 otherwise
- $y \in \{0, 1\}$ where $y=1$ means spam

### Training
Compute for each word $j$ and class $y$:

$$
\begin{align}
\phi_{j|y=1} &= P(x_j=1|y=1) \\
\phi_{j|y=0} &= P(x_j=1|y=0) \\
\phi_y &= P(y=1)
\end{align}
$$

Maximum likelihood estimates:

$$
\begin{align}
\phi_{j|y=1} &= \frac{\sum_{i=1}^{m} \mathbb{1}\{x_j^{(i)}=1 \land y^{(i)}=1\}}{\sum_{i=1}^{m} \mathbb{1}\{y^{(i)}=1\}} \\
\phi_{j|y=0} &= \frac{\sum_{i=1}^{m} \mathbb{1}\{x_j^{(i)}=1 \land y^{(i)}=0\}}{\sum_{i=1}^{m} \mathbb{1}\{y^{(i)}=0\}} \\
\phi_y &= \frac{\sum_{i=1}^{m} \mathbb{1}\{y^{(i)}=1\}}{m}
\end{align}
$$

### Prediction
For a new email $x$:

$$
\arg\max_y P(y) \prod_{j=1}^{10000} P(x_j|y)
$$

In practice, compute log probabilities to avoid numerical underflow:

$$
\arg\max_y \log P(y) + \sum_{j=1}^{10000} \log P(x_j|y)
$$

## Advantages and Limitations

### Advantages
- **Fast** to train and predict
- Works well with **small datasets**
- Can handle **high-dimensional** data
- Simple and interpretable
- Works well for **text classification**
- Can handle missing values easily

### Limitations
- **Strong independence assumption** (often violated in practice)
- If assumption is badly violated, performance can suffer
- **Not great for regression** tasks
- Struggles with **correlated features**

## Practical Tips

1. **Feature engineering** is important:
   - Remove highly correlated features
   - Use domain knowledge to create meaningful features

2. **Always use smoothing** to handle zero probabilities

3. **Log probabilities** prevent numerical underflow:
   ```python
   log_prob = np.log(prior) + np.sum(np.log(likelihoods))
   ```

4. **Try different Naive Bayes variants** depending on your feature types

5. For text:
   - Remove stop words
   - Use TF-IDF instead of raw counts
   - Consider n-grams

6. **Naive Bayes is a great baseline** model - try it first before complex models!

## When to Use Which Algorithm?

| Algorithm | Best For | Assumptions |
|-----------|----------|-------------|
| **GDA** | Continuous features, Gaussian-like data | Features are Gaussian distributed |
| **Gaussian NB** | Continuous features, fast training needed | Features are independent and Gaussian |
| **Multinomial NB** | Text classification, discrete counts | Features are independent counts |
| **Bernoulli NB** | Binary features, presence/absence | Features are independent binary |

---

**Key Takeaway**: Generative models learn the distribution of data for each class and use Bayes' rule to make predictions. They often work well with less data but make stronger assumptions than discriminative models.

