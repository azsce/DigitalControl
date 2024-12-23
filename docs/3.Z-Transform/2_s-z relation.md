---
id: mapping
title: s <-> z 
---

#
## Mapping Between s-Domain and z-Domain
The transition from the S-domain to the Z-domain involves a two-step process:

1. **Signal Sampling:** The continuous-time signal, represented by its Laplace transform F(s), is sampled at regular intervals, transforming it into a discrete-time signal F*(s). 
2. **Variable Substitution:**  Each instance of *e<sup>sT</sup>* in the sampled signal F*(s) is replaced with the variable z, resulting in the Z-transform, F(z).

## ..
This mapping translates regions and points from the complex s-plane to the complex z-plane. Key mapping guidelines are:

1. **Left Half s-plane:** All points in the left half of the s-plane correspond to points inside the unit circle in the z-plane.
2. **Right Half s-plane:** All points in the right half of the s-plane correspond to points outside the unit circle in the z-plane.
3. **jw axis:** Points on the jw axis in the s-plane correspond to points on the unit circle *|z| = 1* in the z-plane.
