---
id: quantization_error
title: Quantization Error and Resolution
sidebar_position: 7
---

## Quantization Error and Resolution

### Quantization Error:
The difference between the actual analog value and its corresponding digital representation.

### Quantization Level (q):
The smallest increment in the digital representation.

### Full Scale (F.S.):
The range of analog values the A/D converter can handle.

### Resolution:
The number of distinct digital levels the A/D converter can output.

### Equations:

- **Quantization Level:** $q = \frac{F.S.}{2^n}$
- **Maximum Quantization Error:** $\frac{q}{2}$
- **Number of States/Levels:** $2^n$ (where $n$ is the number of bits)
- **Maximum Analog Input:** $\left(2^n - 1\right) \times \frac{q}{2} + \frac{q}{2}$

### Example:
An A/D converter with a 4-bit capacity and a full scale of 10 volts would have:

- Resolution: $2^4 = 16$ levels
- Quantization Level:  $\frac{10V}{16} = 0.625V$
- Maximum Quantization Error: $\frac{0.625V}{2} = 0.3125V$

### Example 1: Quantization Levels and Error

**Problem:** Determine the quantization levels of a continuous signal with a range of ±10 volts, passing through a 4-bit A/D converter.

**Solution:**

1. **Full-Scale Range:** The full-scale range is the difference between the maximum and minimum values of the signal: $F.S. = +10 V - (-10 V) = 20 V$.

2. **Quantization Level:** Using the formula, $q = \frac{20 V}{2^4} = \frac{20 V}{16} = 1.25 V$.

3. **Quantization Error:** The maximum quantization error is $\frac{q}{2} = \frac{1.25 V}{2} = 0.625 V$.

### Example 2: Maximum Input and Output

**Problem:** For the same setup as in Example 1, determine the maximum analog signal that can be converted and the maximum digital output.

**Solution:**

1. **Maximum Analog Signal:** The maximum analog input that can be correctly converted is calculated as:

   $\left(\frac{2^n - 1}{2^n}\right) \times F.S. + \frac{q}{2} = \left(\frac{16 - 1}{16}\right) \times 20 V + 0.625 V = 19.375 + 0.625 = 20V$
   
2. **Maximum Digital Signal:** The maximum digital signal is represented by all bits set to '1'. In our 4-bit converter, the maximum digital signal is 1111.

### Example 3: Signal Conversion

**Problem:** What is the binary representation of a +5.325 volt signal input to a 3-bit A/D converter with a full-scale range of 20 volts?

**Solution:**

1. **Quantization Level:** $q = \frac{20 V}{2^3} = \frac{20 V}{8} = 2.5 V$
2. **Quantization Table:** The decimal values and their binary representations are:

| Decimal | Binary |
|:---:|:---:|
| 1.25 | 000 |
| 3.75 | 001 |
| 6.25 | 010 |
| 8.75 | 011 |
| 11.25 | 100 |
| 13.75 | 101 |
| 16.25 | 110 |
| 18.75 | 111 |

3. **Binary Output:** 5.325 volts falls between 3.75 volts and 6.25 volts on the quantization table, so the converter will output 010.
