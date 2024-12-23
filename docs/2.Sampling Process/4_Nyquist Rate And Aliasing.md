A crucial concept in sampling is the Nyquist rate (or frequency $\omega_c$). The Nyquist rate is twice the highest frequency component ($\omega_c$) present in the original signal. The sampling frequency ($\omega_s$) must be greater than the Nyquist rate to avoid aliasing.

Aliasing occurs when the sampling frequency is too low, causing higher frequency components of the original signal to be "folded" back into the lower frequency range, distorting the reconstructed signal. This creates frequencies in the sampled signal that weren't present in the original, continuous signal. To avoid aliasing, the sampling frequency $\omega_s$ should be at least twice the highest frequency present in the input signal ($\omega_c$), formally expressed as:

$$
\frac{\omega_s}{2} > \omega_c
$$
