---
id: inverse-z-transform
title: Inverse Z-Transform
---

#

## Inverse Z-Transform

The Z-transform is a powerful tool in discrete-time signal processing, analogous to the Laplace transform for continuous-time signals. This document focuses on the inverse Z-transform, which allows us to recover the original discrete-time sequence $$f(kT)$$ from its Z-transform $$F(z)$$. Three methods for computing the inverse Z-transform are explored: the power series method, long division, and partial fraction expansion.

### Key Concepts

- **Inverse Z-Transform:** The inverse Z-transform of $$X(z)$$ yields the discrete-time sequence $$x(kT)$$. It is important to note the distinction between $$x(kT)$$, which is sampled at discrete time intervals $$kT$$, and $$x(t)$$, which is continuous.
- **Power Series Method:** This method relies on expressing $$X(z)$$ as a power series in terms of $$z^{-k}$$. The coefficients of the power series directly correspond to the values of $$x(kT)$$ for each $$k$$.
- **Long Division Method:** This is an alternative approach to obtaining the power series representation of $$X(z)$$. By dividing the numerator of $$X(z)$$ by its denominator, we obtain a series of terms with coefficients that correspond to $$x(kT)$$.
- **Partial Fraction Expansion:** For rational functions $$X(z)$$, this method involves decomposing $$X(z)$$ into a sum of simpler fractions. The inverse Z-transform can then be found by applying known transform pairs to each term.
- **Residue Method:** Similar to the inversion formula for the Laplace transform, the residue method computes the inverse Z-transform by summing the residues of $$F(z)z^{k-1}$$ at the poles of $$F(z)$$.

### Examples

**Example 1: Power Series Method (Simple)**

Find the inverse Z-transform of $$F(z) = \frac{1}{1-z^{-1}}$$.

**Solution:**

- Write $$F(z)$$ as a power series: $$F(z) = 1 + z^{-1} + z^{-2} + ...$$
- The coefficients are all 1, so $$f(kT) = 1$$ for all $$k \geq 0$$.

**Example 2: Power Series Method (More Complex)**

Find the inverse Z-transform of:

$$
F(z) = \frac{1}{0.14 - 0.25z^{-1} + 0.125z^{-2} + 0.0625z^{-3} + ...}
$$

**Solution:**

- Long division can be used to get to the form above if it's not already in a power series format.

- The initial coefficients are 1, 0.25, 0.125, and 0.0625, therefore: 
     $$f(0T) = 1$$
     $$f(T) = 0.25$$
     $$f(2T) = 0.125$$
     $$f(3T) = 0.0625$$
     ...

**Example 3: Long Division Method**

Find the inverse Z-transform of $$X(z) = \frac{z}{z^2-3z+2}$$

**Solution:**

1. Perform long division:

<div style={{width: '100%', display: 'flex', justifyContent: 'center' }}>
   <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', width: 'fit-content' }}>
      <!--  -->
      <div style={{ borderRight: '2px solid black'}}>
         <div style={{ padding:'8px', borderBottom: '1px solid black' }}>$$z$$</div>
      </div>
      <!--  -->
      <div>
         <div style={{ padding: '8px', borderBottom: '1px solid black' }}>$$z^{-1} + 3z^{-2} + 7z^{-3} + 15z^{-4} + \cdots$$</div>
         <!--  -->
         <div style={{ padding: '8px'}}>$$z^2 - 3z + 2$$</div>
         <div style={{ padding: '8px', borderBottom: '1px solid black' }}>$$z - 3 + 2z^{-1}$$</div>
         <!--  -->
         <div style={{ padding: '8px'}}>$$3 - 2z$$</div>
         <div style={{ padding: '8px', borderBottom: '1px solid black' }}>$$3 - 9z^{-1} + 6z^{-2}$$</div>
         <!--  -->
         <div style={{ padding: '8px' }}>$$7z^{-1} - 6z^{-2}$$</div>
         <div style={{ padding: '8px', borderBottom: '1px solid black' }}>$$7z^{-1} - 21z^{-2} + 14z^{-3}$$</div>
         <!--  -->
         <div style={{ padding: '8px'}}>$$15z^{-2} - 14z^{-3}$$</div>
      </div>
   </div>
</div>

<br></br>

1. The coefficients from the result of the long division become the values for the inverse: $$x(0) = 0$$, $$x(1) = 1$$, $$x(2) = 3$$, $$x(3) = 7$$, ...
2. The general form of this sequence is $$x(k) = 2^k - 1$$.

**Example 4: Partial Fraction Expansion Method**

Find the inverse Z-transform of $$X(z) = \frac{z}{(z-1)(z-2)}$$

**Solution:**

1. Divide by $$z$$: $$X(z)/z = \frac{1}{(z-1)(z-2)}$$
2. Perform partial fraction expansion: $$\frac{1}{(z-1)(z-2)} = \frac{A}{z-1} + \frac{B}{z-2}$$
3. Solve for the constants $$A$$ and $$B$$: $$A = -1$$, $$B = 1$$.
4. Apply the inverse transform using the table: $$x(k) = (-1)^k + (2)^k$$.

**Example 5: Long Division and Residue Method**

Find the inverse Z-transform of $$F(z)= \frac{-10}{(z-1)(z-3)}$$

**Solution A: Long Division:**

Performing long division as in Example 3 gives $$f(kT) = 0, 0, -10, -40, -130, …$$

**Solution B: Residue Method**

1. Find the poles of $$\frac{f(z)}{z}$$: $$z_1=1$$, $$z_2=3$$
2. Compute the residues:
     $$r_1= \frac{-10}{1-3}=5$$
     $$r_2=\frac{-10}{3-1}=-5/3$$
3. Calculate $$f(0)$$:
     $$f(0)= \frac{-10}{1 \cdot 3}+\frac{-10}{3 \cdot -2} = -10/3 + 5 = 0$$
4. Apply the formula:
     $$f(k) = 5 + \left(\frac{-5}{3}\right) \cdot 3^k \text{ for } k>0$$.

**Example 6: Solving a Difference Equation**

Solve the difference equation:

$$
x(k+2) + 3x(k+1) + 2x(k) = 0, x(0) = 0, x(1) = 1
$$

1. Apply the Z-transform to both sides of the equation using the shifting property:

   $$Z[x(k+n)] = z^n[X(z)] - \sum\limits_{k=0}^{n-1} x(k)z^{(-k+n)}$$

   - $$Z[x(k+2)] = z^2X(z) - z^2x(0) - zx(1)$$
   - $$Z[x(k+1)] = zX(z) - zx(0)$$
   - $$Z[x(k)] = X(z)$$

2. Substitute the transformed terms and initial conditions into the equation:

   $$z^2X(z) - z + 3[zX(z) - zx(0)] + 2X(z) = 0$$

3. Simplify and solve for $$X(z)$$:

   $$z^2X(z) - z + 3zX(z) + 2X(z) = 0$$
   $$X(z)[z^2 + 3z + 2] = z$$
   $$X(z) = \frac{z}{(z+1)(z+2)}$$

4. Apply partial fraction expansion or the residue method to find $$x(k)$$.
