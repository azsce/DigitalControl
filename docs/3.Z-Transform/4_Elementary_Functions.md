---
id: elementary-functions
title: Z-Transform of Elementary Functions
---

#

We will now explore the Z-Transforms of some essential functions.

## 1. Unit Step Function

The unit step function, denoted by u(t) or u(k), takes a value of 1 for t ≥ 0 (or k ≥ 0) and 0 otherwise.  Applying the Z-transform definition, we get:

$$
X(z) = Z[u(k)] = \sum\limits_{k=0}^{\infty} (1)z^{-k} = 1 + z^{-1} + z^{-2} + z^{-3} + ...
$$

This is a geometric series with a common ratio of $$z^{-1}$$. Its sum converges to:

$$
X(z) = \frac{1}{1-z^{-1}} = \frac{z}{z-1}, |z| > 1
$$

## 2. Kronecker Delta Function

The Kronecker delta function, denoted by δ(k), takes a value of 1 for k = 0 and 0 otherwise. Its Z-transform is straightforward:

$$
Z[\delta(k)] = \sum\limits_{k=0}^{\infty} \delta(k)z^{-k} = 1
$$

## 3. Unit-Ramp Function

The unit ramp function, represented by x(t) = t for t ≥ 0 and 0 otherwise, can be expressed in discrete time as x(kT) = kT.  Its Z-transform is derived as:

$$
X(z) = Z[x(kT)] = \sum\limits_{k=0}^{\infty} kTz^{-k} = T(z^{-1} + 2z^{-2} + 3z^{-3} + ...)
$$

This series can be manipulated to obtain a closed-form expression:

$$
X(z) = T \frac{z^{-1}}{(1-z^{-1})^2} = \frac{Tz}{(z-1)^2}
$$

## 4. Polynomial Function

A general polynomial function can be expressed as x(k) = a<sup>k</sup> for k ≥ 0 and 0 otherwise.  Its Z-transform is:

$$
X(z) = Z[x(k)] = \sum\limits_{k=0}^{\infty} a^kz^{-k} = 1 + az^{-1} + a^2z^{-2} + a^3z^{-3} + ...
$$

By rewriting the terms, we recognize another geometric series:

$$
X(z) = 1 + (a^1z^{-1}) + (a^2z^{-2}) + (a^3z^{-3}) + ... = \frac{1}{1-(az)^{-1}} = \frac{z}{z-a}
$$

## 5. Exponential Function

The exponential function, given by x(t) = e<sup>-at</sup> for t ≥ 0 and 0 otherwise, has the following Z-transform:

$$
X(z) = Z[x(kT)] = \sum\limits_{k=0}^{\infty} e^{-akT}z^{-k} = 1 + e^{-aT}z^{-1} + e^{-2aT}z^{-2} + e^{-3aT}z^{-3} + ...
$$

This is yet another geometric series that can be simplified to:

$$
X(z) = \frac{1}{1 - e^{-aT}z^{-1}} = \frac{z}{z-e^{-aT}}
$$

## 6. Sinusoidal Function

The sinusoidal function, x(t) = sin(ωt)u(t), can be expressed using Euler's formula as:

$$
\sin(\omega t) = \frac{1}{2j}(e^{j\omega t} - e^{-j\omega t})
$$

Substituting this representation and applying the Z-transform definition, we get:

$$
X(z) = Z[\frac{1}{2j}(e^{j\omega t} - e^{-j\omega t})] = \frac{1}{2j}(\frac{z}{z-e^{j\omega T}} - \frac{z}{z-e^{-j\omega T}})
$$

Further algebraic manipulation leads to:

$$
X(z) = \frac{z \sin(\omega T)}{z^2 - 2z \cos(\omega T) + 1}
$$