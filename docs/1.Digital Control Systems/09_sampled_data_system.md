---
id: sampled_data_system
title: Block Diagram of Sampled-Data System
sidebar_position: 9
---

### Figure 1:
Shows a typical closed-loop continuous time control system.

### Figure 2:
Depicts a general block diagram of a closed-loop sampled-data system, incorporating A/D and D/A converters.  *(Include diagrams here if available)*

### Key Points:
- The conversion time of A/D converters introduces a time delay, which can impact system stability.
- The output from the A/D converter is in binary format, feeding into the digital controller at the sampling rate.
- The digital controller processes the signal based on the control algorithm, producing a digital output.
- The D/A converter transforms the digital output to a continuous-time analog signal for the plant.
- The decoder and encoder within the D/A converter can be considered constant gain operations.
