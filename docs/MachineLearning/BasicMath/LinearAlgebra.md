# Linear Algebra

This guide covers the essential linear algebra concepts needed for machine learning, including vectors, matrices, matrix calculus, and their applications.

## Basics

**Vector**: $\mathbf{x} = [x_1, x_2, ..., x_n]^T$

**Matrix**: $\mathbf{A} \in \mathbb{R}^{m \times n}$

$$
\mathbf{A} = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

**Transpose**: $(\mathbf{A}^T)_{ij} = \mathbf{A}_{ji}$

**Matrix Multiplication**: $\mathbf{C} = \mathbf{AB}$ where $C_{ij} = \sum_k A_{ik}B_{kj}$
**Identity Matrix**: $\mathbf{I}_n$ where $I_{ij} = 1$ if $i=j$, else $0$
**Inverse**: $\mathbf{A}^{-1}\mathbf{A} = \mathbf{AA}^{-1} = \mathbf{I}$

**Properties**:
- $(\mathbf{AB})^T = \mathbf{B}^T\mathbf{A}^T$
- $(\mathbf{A}^T)^T = \mathbf{A}$
- $(\mathbf{A} + \mathbf{B})^T = \mathbf{A}^T + \mathbf{B}^T$
- $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$
- $(\mathbf{A}^T)^{-1} = (\mathbf{A}^{-1})^T$

<details>
<summary><strong>Trace and Determinant</strong></summary>

**Trace**: Sum of diagonal elements

$$
\text{tr}(\mathbf{A}) = \sum_{i=1}^n A_{ii}
$$

**Properties**:
- $\text{tr}(\mathbf{A} + \mathbf{B}) = \text{tr}(\mathbf{A}) + \text{tr}(\mathbf{B})$
- $\text{tr}(\mathbf{AB}) = \text{tr}(\mathbf{BA})$
- $\text{tr}(\mathbf{A}^T) = \text{tr}(\mathbf{A})$

**Determinant**: $\det(\mathbf{A})$ or $|\mathbf{A}|$

For 2×2 matrix:

$$
\det\begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc
$$

</details>

<details>
<summary><strong>Eigenvalues and Eigenvectors</strong></summary>

For a square matrix $\mathbf{A}$:

$$
\mathbf{Av} = \lambda \mathbf{v}
$$

where $\lambda$ is the eigenvalue and $\mathbf{v}$ is the eigenvector.

**Properties**:
- $\det(\mathbf{A}) = \prod_i \lambda_i$
- $\text{tr}(\mathbf{A}) = \sum_i \lambda_i$

</details>


## Matrix Calculus

**Matrix-Vector Product Derivatives**:

$$
\frac{\partial \mathbf{Ax}}{\partial \mathbf{A}} = \mathbf{x}^T
$$

$$
\frac{\partial \mathbf{Ax}}{\partial \mathbf{x}} = \mathbf{A}
$$

**Matrix Product Derivatives**:

$$
\frac{\partial \mathbf{AB}}{\partial \mathbf{A}} = \mathbf{B}^T
$$

$$
\frac{\partial \mathbf{AB}}{\partial \mathbf{B}} = \mathbf{A}^T
$$

**Dot Product Derivatives**:

For $z = \mathbf{y}^T\mathbf{x}$:

$$
\frac{\partial z}{\partial \mathbf{x}} = \mathbf{y}, \quad \frac{\partial z}{\partial \mathbf{y}} = \mathbf{x}
$$

**Quadratic Form** (very important!):

For $f(\mathbf{x}) = \mathbf{x}^T\mathbf{Ax}$:

$$
\frac{\partial (\mathbf{x}^T\mathbf{Ax})}{\partial \mathbf{x}} = (\mathbf{A} + \mathbf{A}^T)\mathbf{x}
$$

If $\mathbf{A}$ is symmetric:

$$
\frac{\partial (\mathbf{x}^T\mathbf{Ax})}{\partial \mathbf{x}} = 2\mathbf{Ax}
$$

**Linear Form**:

$$
\frac{\partial (\mathbf{a}^T\mathbf{x})}{\partial \mathbf{x}} = \mathbf{a}
$$

$$
\frac{\partial (\mathbf{x}^T\mathbf{a})}{\partial \mathbf{x}} = \mathbf{a}
$$

**Norm Squared**:

$$
\frac{\partial (\mathbf{x}^T\mathbf{x})}{\partial \mathbf{x}} = 2\mathbf{x}
$$

$$
\frac{\partial \|\mathbf{x}\|^2}{\partial \mathbf{x}} = 2\mathbf{x}
$$

## Common ML Applications

**Linear Regression Loss**:

$$
L(\mathbf{w}) = \|\mathbf{Xw} - \mathbf{y}\|^2 = (\mathbf{Xw} - \mathbf{y})^T(\mathbf{Xw} - \mathbf{y})
$$

$$
\frac{\partial L}{\partial \mathbf{w}} = 2\mathbf{X}^T(\mathbf{Xw} - \mathbf{y})
$$

Setting to zero gives the **Normal Equation**:

$$
\mathbf{w} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}
$$

