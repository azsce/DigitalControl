To understand the effects of sampling in the frequency domain, Fourier analysis is employed. Since $p(t)$ is periodic, it can be represented by a Fourier series:

$$
p(t) = \sum_{n=-\infty}^{\infty} C_n e^{jn\omega_o t}
$$

where $\omega_o = \frac{2\pi}{T}$ is the sampling frequency, and $C_n$ are the complex Fourier series coefficients.

The coefficients $C_n$ can be calculated as:

$$
C_n = \frac{p}{T} \cdot \frac{\sin(n\omega_o p/2)}{n\omega_o p/2} \cdot e^{-jn\omega_o p/2}
$$

The magnitude of $C_n$ is therefore:

$$
|C_n| = \frac{p}{T} \cdot \frac{\sin(n\omega_o p/2)}{n\omega_o p/2}
$$

This is a sinc function, which has a peak at $n = 0$ and zeros at multiples of $\pi$.

The sampled signal $f^*(t)$ in the frequency domain, $F^*(j\omega)$, is a shifted and scaled version of the original signal's spectrum $F(j\omega)$:

$$
F^*(j\omega) = \sum_{n=-\infty}^{\infty} C_n F(j\omega + jn\omega_s)
$$

When $n=0$, this simplifies to:

$$
F^*(j\omega) = \frac{p}{T} F(j\omega)
$$
