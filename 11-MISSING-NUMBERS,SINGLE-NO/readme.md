# 75 Days of DSA Grind – Day 11 🚀  

## 🧠 Topics Covered  
1. **Single Number (Using XOR / HashMap)**  
2. **Missing Number**  

---

## 📚 Overview  
Day 11 focused on two **essential array and bit manipulation problems** — "Single Number" and "Missing Number." Both are easy-level questions on LeetCode but carry powerful logic-building insights. The main goal today was to strengthen **XOR understanding** and **problem-solving optimization**.  

---

## 🔹 Problem 1: Single Number  
**Problem:**  
Given an array where every element appears twice except for one, find the single element that appears only once.  

**Approaches:**  
- **HashMap / Frequency Table:**  
  - Count occurrences of each number.  
  - Return the number with frequency 1.  
  - Time Complexity: O(n), Space Complexity: O(n).  

- **XOR (Optimized):**  
  - XOR all elements — duplicates cancel out (`a ^ a = 0`).  
  - The remaining number is the single element.  
  - Time Complexity: O(n), Space Complexity: O(1).  

**Learning:**  
- XOR behaves like a “mathematical toggle.”  
- Great example of bitwise optimization.  

---

## 🔹 Problem 2: Missing Number  
**Problem:**  
Given an array containing `n` distinct numbers from `0` to `n`, find the missing number.  

**Approaches:**  
- **Sum Formula Method:**  
  - Expected sum = `n * (n + 1) / 2`  
  - Subtract actual array sum from expected sum.  
- **XOR Method:**  
  - XOR all numbers from 0 to n and with the array elements.  
  - Remaining result = missing number.  

**Learning:**  
- Combining math and logic helps solve problems cleanly.  
- XOR again proves powerful for pattern-based problems.  

---

## 🌱 Key Insights  
- XOR is not just theoretical — it’s **practically efficient** for problems with repeating patterns.  
- Always think about **space optimization**.  
- Every easy problem hides **deep logic concepts**.  
- Revisiting fundamentals (sum, bitwise) improves long-term memory.  

---

## 💭 Reflection  
Day 11 might look easy at first glance, but it helped me **visualize the XOR process** and build a better sense of **bit-level optimization**. I now understand how to decide between brute force and bit manipulation based on the problem type.  

---

## 🌐 Social Links  
- 🧑‍💻 **GitHub:** [https://github.com/Maheshkrsaw](https://github.com/Maheshkrsaw)  
- 💼 **LinkedIn:** [https://www.linkedin.com/in/maheshmahi07/](https://www.linkedin.com/in/maheshmahi07/)  
- 🐦 **Twitter:** [https://x.com/kumarMahesh9304](https://x.com/kumarMahesh9304)  
- 📂 **Repo:** [https://github.com/Maheshkrsaw/75-Days-of-DSA-Grind](https://github.com/Maheshkrsaw/75-Days-of-DSA-Grind)  

---

🔥 **#75DaysOfDSAGrind #DSA #JavaScript #BitManipulation #LearnInPublic #LeetCode #CodingJourney #ProblemSolving**
