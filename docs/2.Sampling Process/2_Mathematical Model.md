A continuous signal $f(t)$ is **sampled by multiplying** it with a unit pulse train $p(t)$ to produce the sampled signal $f^*(t)$. 

---

The unit pulse train $p(t)$ is periodic with period $T$ and a pulse duration of $p$. 

Mathematically, it can be represented as:

$$
p(t) = \sum_{k=-\infty}^{\infty} [u_s(t-kT) - u_s(t-kT-p)]
$$

where $u_s(t)$ is the unit step function.

---

The sampled signal $f^*(t)$ is therefore:

$$
f^*(t) = f(t) \cdot p(t)
$$
