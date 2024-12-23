---
id: analyzing-system-properties
title: System Properties
---

# 

The Z-transform offers several tools for analyzing the properties of a discrete-time system:

1. **Transfer Function (TF) and Pulse Transfer Function (PTF):** The z-domain transfer function, similar to the s-domain counterpart, can be represented as the ratio of the numerator polynomial $$N(z)$$ to the denominator polynomial $$D(z)$$:

$$
PTF = G(z) = \frac{Y(z)}{X(z)} = \frac{N(z)}{D(z)}
$$

   This PTF defines the input-output relationship of the system in the z-domain.

2. **Pole-Zero Configuration:** The poles and zeros of the PTF provide insights into the system's stability, transient response, and frequency response.

3. **Causality:**  A discrete-time system is causal if its output depends only on past and present inputs, not on future inputs.  In the z-domain, causality can be determined by analyzing the order of the numerator and denominator polynomials. If the order of the denominator is greater than or equal to the order of the numerator, the system is likely causal.

## System Stability
System stability in the Z-domain is analyzed using the unit circle.  The poles of the system's transfer function, when plotted in the Z-plane, determine its stability characteristics:

* **Stable System:** All poles lie inside the unit circle.
* **Unstable System:**  At least one pole lies outside the unit circle.
* **Marginally Stable System:** At least one pole lies on the unit circle, and no poles lie outside.