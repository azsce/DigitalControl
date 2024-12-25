**Impulse Sampling, ZOH, and Pulse Transfer Function**

[Diagram of impulse sampling with $$k-2 T$$, $$k-1 T$$, $$kT$$, $$k+1 T$$ marked on the time axis]

Data reconstruction process may be regarded as an extrapolation process since the continuous data signal has to be formed based on the information available at past sampling instants.

Suppose the original signal $$f(t)$$ between two consecutive sampling instants $$kT$$ and $$(k+1)T$$ is to be estimated based on the values of $$f(t)$$ at previous instants of $$kT$$, i.e., $$(k-1)T$$, $$(k-2)T$$, …, $$0$$.

Power series expansion is a well-known method of generating the desired approximation which yields

$$
f_k(t) = f(kT) + f^{(1)}(kT)(t - kT) + \frac{f^{(2)}(kT)(t - kT)^2}{2!} + …
$$

where,
$$
f_k(t) = f(t) \text{ for } kT \leq t \leq (k+1)T
$$
and
$$
f^{(n)}(kT) = \left.\frac{d^n f(t)}{dt^n}\right|_{t=kT} \text{ for } n = 1, 2, …
$$

Since the only available information about $$f(t)$$ is its magnitude at the sampling instants, the derivatives of $$f(t)$$ must be estimated from the values of $$f(kT)$$, as

$$
f^{(1)}(kT) \approx \frac{1}{T} [f(kT) - f((k-1)T)]
$$

Similarly,
$$
f^{(2)}(kT) \approx \frac{1}{T} [f^{(1)}(kT) - f^{(1)}((k-1)T)]
$$

where,
$$
f^{(1)}((k-1)T) \approx \frac{1}{T} [f((k-1)T) - f((k-2)T)]
$$

**Zero Order Hold**

> Higher the order of the derivatives to be estimated is, larger will be the number of delayed pulses required.
> Since time delay degrades the stability of a closed loop control system, using higher order derivatives of $$f(t)$$ for more accurate reconstruction often causes serious stability problem.
> Moreover a high order extrapolation requires complex circuitry and results in high cost.

For the above reasons, use of only the first term in the power series to approximate $$f(t)$$ during the time interval $$kT \leq t < (k+1)T$$ is very popular and the device for this type of extrapolation is known as zero-order extrapolator or zero-order hold. It holds the value of $$f(kT)$$ for $$kT \leq t < (k+1)T$$ until the next sample $$f((k+1)T)$$ arrives. Figure 1 illustrates the operation of a ZOH where the green line represents the original continuous signal and brown line represents the reconstructed signal from ZOH.
