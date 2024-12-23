---
id: matlab-implementation
title: MATLAB Implementation
---

### MATLAB Implementation

MATLAB offers a convenient way to calculate Z-Transforms using the `ztrans` function.  Let's demonstrate this with two examples:

**Example 1: Z-transform of sin(a*k)**

```matlab
syms a k z; % Define symbolic variables
f = sin(a*k); % Define the function
ztrans(f,z) % Calculate Z-transform
```

**Output:**

```
(z*sin(a))/(z^2 - 2*cos(a)*z + 1)
```

**Example 2: Z-transform of e<sup>-kT</sup>**

```matlab
syms k T; % Define symbolic variables
f = exp(-k*T); % Define the function
ztrans(f) % Calculate Z-transform
```

**Output:**

```
z/(z - 1/exp(T))
```