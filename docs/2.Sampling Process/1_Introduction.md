This part continues the discussion on digital control systems, focusing specifically on the mathematical modeling of the sampling process. This process is crucial for converting continuous-time signals into discrete-time signals suitable for digital processing. While analog-to-digital converters (A/D) play a role in a complete digital control system, this lecture specifically simplifies the model by considering only the sampling process itself, independent of A/D conversion specifics.

## Key Concepts

The core of sampling is based on converting a continuous signal into a pulse-modulated or discrete signal. There are three main types of pulse modulation:

1. Pulse Amplitude Modulation (PAM): The amplitude of a pulse train is varied according to the instantaneous value of the input signal. This is the most commonly used method and the focus of this lecture.
2. Pulse Width Modulation (PWM): The width of a pulse train is varied according to the instantaneous value of the input signal.
3. Pulse Frequency Modulation (PFM): The frequency of a pulse train is varied according to the instantaneous value of the input signal.
