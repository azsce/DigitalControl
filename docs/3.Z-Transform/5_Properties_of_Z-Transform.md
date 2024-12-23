---
id: properties-of-z-transform
title: Properties of Z-Transform
---
#
## Properties of Z-Transform

The Z-Transform exhibits several useful properties that simplify its application in solving discrete-time systems. These include:

### Linearity:
The Z-transform of a linear combination of signals is equal to the linear combination of their individual Z-transforms.

$$
Z[ax_1(k) + bx_2(k)] = aX_1(z) + bX_2(z)
$$

### Multiplication by a constant:
The Z-transform of a signal multiplied by a constant is equal to the constant multiplied by the Z-transform of the signal.

$$
Z[ax(k)] = aX(z)
$$

## Real translation (Shifting Theorem):
The Z-transform of a time-shifted signal can be related to the original signal's Z-transform.

### Time Delay:
$$
Z[x(k-n)u(k-n)] = z^{-n}X(z)
$$


### Time Advance:
$$
Z[x(k+n)] = z^n[X(z) - \sum\limits_{k=0}^{n-1} x(k)z^{-k}]
$$
