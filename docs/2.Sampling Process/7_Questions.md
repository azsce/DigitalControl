---
id: questions
title: "Q&A"
sidebar_position: 7
toc: true
---

<details>
<summary><strong>Q1: What is the most common type of pulse modulation used in sampling?</strong></summary>

<div style={{paddingLeft: "20px", width: "100%"}}>
	Pulse Amplitude Modulation (PAM).
</div>
</details>

<details>
<summary><strong>Q2: What is the Nyquist rate?</strong></summary>

<div style={{paddingLeft: "20px", width: "100%"}}>
	Twice the highest frequency component present in the original signal.
</div>
</details>

<details>
<summary><strong>Q3: What happens if the sampling rate is less than the Nyquist rate?</strong></summary>

<div style={{paddingLeft: "20px", width: "100%"}}>
	Aliasing occurs, distorting the reconstructed signal.
</div>
</details>

<details>
<summary><strong>Q4: How can aliasing be avoided?</strong></summary>

<div style={{paddingLeft: "20px", width: "100%"}}>
	By ensuring the sampling frequency is greater than the Nyquist rate.
</div>
</details>

<details>
<summary><strong>Q5: What is the key benefit of representing a sampled signal in the s-domain?</strong></summary>

<div style={{paddingLeft: "20px", width: "100%"}}>
	The s-domain representation simplifies analysis of systems involving sampling, particularly in the context of digital control systems or filter design.
</div>
</details>

<details>
<summary><strong>Q6: What is the role of the unit pulse train in the mathematical model of sampling?</strong></summary>

<div style={{paddingLeft: "20px", width: "100%"}}>
	The unit pulse train acts as a switch, isolating the values of the continuous-time signal at the sampling instants.
</div>
</details>

<details>
<summary><strong>Q7: When is the flat-top approximation valid?</strong></summary>

<div style={{paddingLeft: "20px", width: "100%"}}>
	The flat-top approximation is valid when the sampling duration is significantly smaller than both the sampling period and the smallest time constant of the original signal.
</div>
</details>

<details>
<summary><strong>Q8: What characterizes an ideal sampler?</strong></summary>

<div style={{paddingLeft: "20px", width: "100%"}}>
	An ideal sampler is characterized by instantaneous sampling, where the sampling duration is effectively zero, or the switching action opening and closing instantaneously. The sampled signal is then represented using the unit impulse function.
</div>
</details>
