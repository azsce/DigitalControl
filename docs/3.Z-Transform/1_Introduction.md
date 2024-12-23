---
id: introduction
title: Z-Transform
---

#
The Z-transform is a mathematical tool used to analyze and design discrete-time systems. It serves as a bridge between the continuous-time domain, represented by the Laplace transform (S-domain), and the discrete-time domain (Z-domain). Analogous to the Laplace transform for continuous-time signals, the Z-transform plays a crucial role in the analysis and design of digital control systems.

## Why the Z-Transform?

The Laplace transform of a sampled signal, often denoted as *F*(s), contains an exponential term (e<sup>-Ts</sup>), which creates difficulties in performing the inverse Laplace transform. This term makes the function *irrational*, which is challenging to work with. Therefore, the Z-transform provides a way to convert the irrational Laplace transform into a more manageable *rational function* in the z-domain.

## Definition of the Z-Transform:

The Z-transform of a discrete-time signal $$f(kT)$$ is defined as:

$$
F(z) = Z\{f(kT)\} = \sum\limits_{k=0}^{\infty} f(kT)z^{-k}
$$

where:

* $$z$$ is a complex variable.
* $$T$$ is the sampling period.


The Z-Transform is defined for both continuous-time functions and sequences of numbers. However, for our purposes, we will focus on the one-sided Z-Transform, applicable to non-negative time values or sequences of numbers.

**Z-Transform for a time function x(t):**
$$
X(z) = Z[x(t)] = Z[x(kT)] = \sum\limits_{k=0}^{\infty} x(kT)z^{-k}
$$

**Z-Transform for a sequence of numbers x(k):**
$$
X(z) = Z[x(k)] = \sum\limits_{k=0}^{\infty} x(k)z^{-k}
$$

The essence of the Z-transform lies in converting a function in the time domain (t or k) into a function in the Z-domain, denoted by z. This transformation is achieved by mapping the continuous-time variable s from the Laplace domain to the discrete-time variable z using the relationship:


## Relationship to Laplace Transform:

The Z-transform can be derived from the Laplace transform of a sampled signal by substituting:

$$
z = e^{sT}
$$

where:

* $$s$$ is the complex frequency variable in the s-domain.

