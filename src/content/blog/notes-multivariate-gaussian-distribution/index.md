---
title: 'Notes: Multivariate Gaussian Distributions'
description: 'My notes on Gaussian Distributions (Ongoing)'
date: 2026-04-21
tags: ["tech", "math"]
image: './banner.png'
authors: ['CodingLife1024']
---

# Univariate Gaussian

$p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)$

## Properties of the Univariate Gaussian Distribution

Given:
$$
p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)
$$

- **Mean:**
  $$
  \mathbb{E}[X] = \mu
  $$

- **Variance:**
  $$
  \mathrm{Var}(X) = \sigma^2
  $$

- **Standard Deviation:**
  $$
  \sigma = \sqrt{\mathrm{Var}(X)}
  $$

- **Mode:**
  $$
  \text{Mode} = \mu
  $$

- **Median:**
  $$
  \text{Median} = \mu
  $$

- **Symmetry:**
  
  The distribution is symmetric about the mean $\mu$.

- **Moment Generating Function (MGF):**
  $$
  M_X(t) = \mathbb{E}[e^{tX}] = \exp\left(\mu t + \frac{1}{2}\sigma^2 t^2\right)
  $$

- **Characteristic Function:**
  $$
  \phi_X(t) = \mathbb{E}[e^{itX}] = \exp\left(i\mu t - \frac{1}{2}\sigma^2 t^2\right)
  $$

- **Standardization:**
  
  If $X \sim \mathcal{N}(\mu, \sigma^2)$, then:
  $$
  Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)
  $$

- **Sum of Independent Gaussians:**
  
  If $X_1 \sim \mathcal{N}(\mu_1, \sigma_1^2)$ and $X_2 \sim \mathcal{N}(\mu_2, \sigma_2^2)$ are independent:
  $$
  X_1 + X_2 \sim \mathcal{N}(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)
  $$

- **Linear Transformation:**
  
  If $X \sim \mathcal{N}(\mu, \sigma^2)$ and $Y = aX + b$, then:
  $$
  Y \sim \mathcal{N}(a\mu + b, a^2\sigma^2)
  $$

- **Entropy:**
  $$
  H(X) = \frac{1}{2} \log\left(2\pi e \sigma^2\right)
  $$

- **Maximum Entropy Property:**
  
  Among all continuous distributions with a fixed mean and variance, the Gaussian has the maximum entropy.

# Multivariate Gaussian 

The probability density function of a $d$-dimensional multivariate Gaussian is:

$$
p(\mathbf{x}; {\mu}, {\Sigma}) = \frac{1}{(2\pi)^{d/2} |\Sigma|^{1/2}} \exp\left( -\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^\top \Sigma^{-1} (\mathbf{x} - \boldsymbol{\mu}) \right)
$$

where:

- $\mathbf{x} \in \mathbb{R}^d$ is the random vector  
- $\boldsymbol{\mu} \in \mathbb{R}^d$ is the mean vector  
- $\Sigma \in \mathbb{R}^{d \times d}$ is the covariance matrix (symmetric and positive definite)  
- $|\Sigma|$ denotes the determinant of $\Sigma$  
- **Covariance matrix:** $\Sigma \in \mathcal{S}_{++}^n$

  where $\mathcal{S}_{++}^n = \{ A \in \mathbb{R}^{n \times n} \mid A = A^\top,\; x^\top A x > 0 \;\forall x \neq 0 \}$

  denotes the set of all $n \times n$ symmetric positive definite matrices.

### Covariance and Variance

- **Covariance matrix:**
  $$
  \Sigma = \mathbb{E}\big[(\mathbf{X} - \boldsymbol{\mu})(\mathbf{X} - \boldsymbol{\mu})^\top\big]
  $$

  Expanded form:
  $$
  \Sigma =
  \begin{bmatrix}
  \mathrm{Var}(X_1) & \mathrm{Cov}(X_1, X_2) & \cdots & \mathrm{Cov}(X_1, X_n) \\
  \mathrm{Cov}(X_2, X_1) & \mathrm{Var}(X_2) & \cdots & \mathrm{Cov}(X_2, X_n) \\
  \vdots & \vdots & \ddots & \vdots \\
  \mathrm{Cov}(X_n, X_1) & \mathrm{Cov}(X_n, X_2) & \cdots & \mathrm{Var}(X_n)
  \end{bmatrix}
  $$

- **Covariance (between $X_i$ and $X_j$):**
  $$
  \mathrm{Cov}(X_i, X_j) = \mathbb{E}\big[(X_i - \mu_i)(X_j - \mu_j)\big]
  $$

- **Variance (of $X_i$):**
  $$
  \mathrm{Var}(X_i) = \mathbb{E}\big[(X_i - \mu_i)^2\big]
  $$

## Diagonal Covariance Matrix Case (Multivariate Gaussian)

Consider a $d$-dimensional multivariate Gaussian:

$$
p(\mathbf{x}; {\mu}, {\Sigma}) = \frac{1}{(2\pi)^{d/2} |\Sigma|^{1/2}} 
\exp\left( -\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^\top \Sigma^{-1} (\mathbf{x} - \boldsymbol{\mu}) \right)
$$

### Assumption: Diagonal Covariance Matrix

Let the covariance matrix be diagonal:

$$
\Sigma = 
\begin{bmatrix}
\sigma_1^2 & 0 & \cdots & 0 \\
0 & \sigma_2^2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \sigma_d^2
\end{bmatrix}
$$

### Step 1: Determinant of $\Sigma$

Since $\Sigma$ is diagonal:

$$
|\Sigma| = \prod_{i=1}^{d} \sigma_i^2
$$

---

### Step 2: Inverse of $\Sigma$

The inverse of a diagonal matrix is:

$$
\Sigma^{-1} =
\begin{bmatrix}
\frac{1}{\sigma_1^2} & 0 & \cdots & 0 \\
0 & \frac{1}{\sigma_2^2} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \frac{1}{\sigma_d^2}
\end{bmatrix}
$$

---

### Step 3: Quadratic Form Expansion

Let $\mathbf{x} = (x_1, \dots, x_d)^\top$ and $\boldsymbol{\mu} = (\mu_1, \dots, \mu_d)^\top$.

Then:

$$
(\mathbf{x} - \boldsymbol{\mu})^\top \Sigma^{-1} (\mathbf{x} - \boldsymbol{\mu})
= \sum_{i=1}^{d} \frac{(x_i - \mu_i)^2}{\sigma_i^2}
$$

---

### Step 4: Substitute Back into the PDF

$$
p(\mathbf{x}; {\mu}, {\Sigma}) 
= \frac{1}{(2\pi)^{d/2} \left(\prod_{i=1}^{d} \sigma_i^2 \right)^{1/2}} 
\exp\left( -\frac{1}{2} \sum_{i=1}^{d} \frac{(x_i - \mu_i)^2}{\sigma_i^2} \right)
$$

Simplify the normalization term:

$$
(2\pi)^{d/2} \left(\prod_{i=1}^{d} \sigma_i^2 \right)^{1/2}
= \prod_{i=1}^{d} \sqrt{2\pi \sigma_i^2}
$$

---

### Final Result

$$
p(\mathbf{x}; {\mu}, {\Sigma}) 
= \prod_{i=1}^{d} 
\frac{1}{\sqrt{2\pi \sigma_i^2}} 
\exp\left( -\frac{(x_i - \mu_i)^2}{2\sigma_i^2} \right)
$$

---

### Interpretation

- The multivariate Gaussian **factorizes into a product of independent univariate Gaussians**.
- Each dimension $x_i$ is independent:
  
  $$
  X_i \sim \mathcal{N}(\mu_i, \sigma_i^2)
  $$

- Therefore:
  
  $$
  p(\mathbf{x}; {\mu}, {\Sigma}) = \prod_{i=1}^{d} p(x_i)
  $$

## Diagonal Covariance Case (2-D Multivariate Gaussian)

Consider a 2-dimensional Gaussian:

$$
p(\mathbf{x}) = \frac{1}{(2\pi)^{1} |\Sigma|^{1/2}} 
\exp\left( -\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^\top \Sigma^{-1} (\mathbf{x} - \boldsymbol{\mu}) \right)
$$

where:
$$
\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}, \quad
\boldsymbol{\mu} = \begin{bmatrix} \mu_1 \\ \mu_2 \end{bmatrix}
$$

---

### Diagonal Covariance Matrix

$$
\Sigma =
\begin{bmatrix}
\sigma_1^2 & 0 \\
0 & \sigma_2^2
\end{bmatrix}
$$

---

### Determinant

$$
|\Sigma| = \sigma_1^2 \sigma_2^2
$$

---

### Inverse

$$
\Sigma^{-1} =
\begin{bmatrix}
\frac{1}{\sigma_1^2} & 0 \\
0 & \frac{1}{\sigma_2^2}
\end{bmatrix}
$$

---

### Quadratic Form

$$
(\mathbf{x} - \boldsymbol{\mu})^\top \Sigma^{-1} (\mathbf{x} - \boldsymbol{\mu})
= \frac{(x_1 - \mu_1)^2}{\sigma_1^2} + \frac{(x_2 - \mu_2)^2}{\sigma_2^2}
$$

---

### Substitute into PDF

$$
p(\mathbf{x}) 
= \frac{1}{2\pi \sigma_1 \sigma_2}
\exp\left(
- \frac{1}{2} \left[
\frac{(x_1 - \mu_1)^2}{\sigma_1^2}
+
\frac{(x_2 - \mu_2)^2}{\sigma_2^2}
\right]
\right)
$$

---

### Final Factorized Form

$$
p(\mathbf{x}) 
= \left( \frac{1}{\sqrt{2\pi \sigma_1^2}} \exp\left(-\frac{(x_1 - \mu_1)^2}{2\sigma_1^2}\right) \right)
\left( \frac{1}{\sqrt{2\pi \sigma_2^2}} \exp\left(-\frac{(x_2 - \mu_2)^2}{2\sigma_2^2}\right) \right)
$$

---

### Interpretation

- $X_1$ and $X_2$ are independent.
- 
$$
X_1 \sim \mathcal{N}(\mu_1, \sigma_1^2), \quad
X_2 \sim \mathcal{N}(\mu_2, \sigma_2^2)
$$

- Therefore:
$$
p(\mathbf{x}) = p(x_1)\,p(x_2)
$$