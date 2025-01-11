---
id: Z-Transform-Table
title: Z-Transform Table
---


#

<div style={{width: "100%", display: "flex", justifyContent: "center"}}>
| $$x(t)$$                  | $$X(s)$$       | $$X(z)$$                                                                 |
|---------------------------|----------------|--------------------------------------------------------------------------|
| $$\delta(t) = \begin{cases} \frac{1}{\epsilon}, & t < \epsilon, \epsilon \to 0 \\ 0, & \text{otherwise} \end{cases}$$ | $$1$$          | -                                                                   |
| $$\delta(t - a) = \begin{cases} \frac{1}{\epsilon}, & a < t < a + \epsilon, \epsilon \to 0 \\ 0, & \text{otherwise} \end{cases}$$ | $$e^{-as}$$    | -                                                              |
| $$\delta_o(t) = \begin{cases} 1, & t = 0 \\ 0, & t = kT, k \neq 0 \end{cases}$$ | $$1$$          | $$1$$                                                                   |
| $$\delta_o(t - kT) = \begin{cases} 1, & t = kT \\ 0, & t \neq kT \end{cases}$$ | $$e^{-kTs}$$   | $$z^{-k}$$                                                              |
| $$u(t)$$, unit step       | $$\frac{1}{s}$$ | $$\frac{z}{z - 1}$$                                                     |
| $$t$$                     | $$\frac{1}{s^2}$$ | $$\frac{Tz}{(z - 1)^2}$$                                                |
| $$e^{-at}$$               | $$\frac{1}{s + a}$$ | $$\frac{z}{z - e^{-aT}}$$                                               |
| $$1 - e^{-at}$$           | $$\frac{1}{s(s + a)}$$ | $$\frac{(1 - e^{-aT})z}{(z - 1)(z - e^{-aT})}$$                         |
| $$\sin(\omega t)$$        | $$\frac{\omega}{s^2 + \omega^2}$$ | $$\frac{z \sin(\omega T)}{z^2 - 2z \cos(\omega T) + 1}$$                |
| $$\cos(\omega t)$$        | $$\frac{s}{s^2 + \omega^2}$$ | $$\frac{z(z - \cos(\omega T))}{z^2 - 2z \cos(\omega T) + 1}$$           |
| $$e^{-at} \sin(\omega t)$$| $$\frac{\omega}{(s + a)^2 + \omega^2}$$ | $$\frac{z e^{-aT} \sin(\omega T)}{z^2 - 2z e^{-aT} \cos(\omega T) + e^{-2aT}}$$ |
| $$e^{-at} \cos(\omega t)$$| $$\frac{s + a}{(s + a)^2 + \omega^2}$$ | $$\frac{z^2 - z e^{-aT} \cos(\omega T)}{z^2 - 2z e^{-aT} \cos(\omega T) + e^{-2aT}}$$ |
</div>