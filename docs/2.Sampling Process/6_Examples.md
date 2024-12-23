### Example 1: $f(t) = t$

1. Find the Laplace transform of $f(t)$: $F(s) = 1/s^2$

2. Apply the flat-top approximation for the sampled signal: $f^*(t) \approx f(kT) \cdot p(t) = kT \cdot p(t)$

3. Express $F^*(s)$ using the definition of the Laplace transform of a sampled signal:

$$
F^*(s) = \sum_{k=0}^{\infty} kT \cdot e^{-kTs}
$$

4. Multiply both sides by $e^{-Ts}$:

$$
e^{-Ts} F^*(s) = \sum_{k=1}^{\infty} (k-1)T \cdot e^{-kTs}
$$

5. Subtract the second equation from the first:

$$
F^*(s)(1-e^{-Ts}) = \sum_{k=0}^{\infty} T \cdot e^{-kTs} = \frac{T}{1-e^{-Ts}}
$$

6. Thus:

$$
F^*(s) = \frac{T \cdot e^{-Ts}}{(1-e^{-Ts})^2}
$$

### Example 2: $F(s) = e^{-Ts}/(s+a)$

1. Find the inverse Laplace transform of $F(s)$: $f(t) = e^{-a(t-T)}$

2. Evaluate $f(t)$ at the sampling instants: $f(kT) = e^{-a(kT-T)}$

3. Express $F^*(s)$ using the definition of the Laplace transform of a sampled signal:

$$
F^*(s) = \sum_{k=0}^{\infty} f(kT)e^{-kTs} = \sum_{k=0}^{\infty} e^{-a(kT-T)} e^{-kTs} = e^{aT} \sum_{k=0}^{\infty} e^{-kT(s+a)} = \frac{e^{aT}}{1-e^{-T(s+a)}}
$$
