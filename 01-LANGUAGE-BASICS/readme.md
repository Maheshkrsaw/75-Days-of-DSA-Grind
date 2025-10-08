# 75 Days of DSA Grind – Day 01 🚀💻  

**Topic:** Warm-Up & JavaScript Fundamentals  

## Overview 📝
Day 01 focused on **building a strong foundation in JavaScript** before diving into DSA problems. Understanding JS fundamentals ensures smooth progress in problem-solving and coding interviews.  

**Concepts Covered:**  
- `let`, `var`, `const` → Scope, re-declaration, and best practices  
- Data Types → Number, String, Boolean, Undefined, Null, Object  
- How JS executes code line-by-line (Global Execution Context & Call Stack)  
- Arrays → Creation, access, iteration methods (`for`, `while`, `forEach`)  
- Conditional Statements → `if`, `else if`, `else`  
- Loops → `for`, `while`, `do...while`  
- Functions & Arguments → Declaration, Parameters, Return values  

## Approach & Problem-Solving Strategy 🧠
- Practiced **writing clean, readable code** line by line.  
- Used **small examples** to understand execution flow and variable scope.  
- Focused on loops, conditions, and function usage as **core problem-solving tools**.  

## Tips & Best Practices 💡
- Prefer `let` and `const` over `var`.  
- Use `console.log()` to trace and debug code.  
- Understand the **flow of code execution** before tackling algorithmic problems.  

## Sample Code Examples 💻
```javascript
// Variable declarations
let a = 10;
const b = 20;
var c = 30;

// Array example
let arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Function example
function add(x, y) {
  return x + y;
}
console.log(add(5, 10)); // 15

// Conditional & Loop
if (a > 5) {
  console.log("a is greater than 5");
}
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
