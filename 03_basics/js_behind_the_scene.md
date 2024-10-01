javascript is single threaded and

# JavaScript Behind the Scenes

## Execution Contexts in JavaScript

There are several execution contexts in JavaScript:

- Global execution context
- Function execution context
- Eval execution context (property of global object)

## Code Execution Phases in JavaScript

Code gets executed in two phases in JavaScript:

- Memory creation phase
- Execution phase

## Global Object

- In browsers, the global object is `window`.
- In Node.js, the global object is `global`.

## Example Code

```javascript
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

1. First, the code runs through the global execution phase, and variables are allocated inside this context.

2. **Creation phase / Memory phase**: All the variables are put together and kept as:

   - `val1` -> `undefined`
   - `val2` -> `undefined`
   - `addNum` -> function definition
   - `result1` -> `undefined`
   - `result2` -> `undefined`

   These are just declared and not given values in this phase.

3. **Execution phase**:
   - `val1` <- `10` (values are provided in this phase)
   - `val2` <- `5`
   - `addNum` -> function execution context is created:
     - New variables and environment, execution thread are designed.
     - Again, memory phase and execution phase occur for the function and its variables created inside.
     - All this environment is deleted after the execution of the function.

### Function Execution Context

- **Memory phase**:
  - `num1` -> `undefined`
  - `num2` -> `undefined`
  - `total` -> `undefined`
- **Execution phase**:
  - `num1` -> `10`
  - `num2` -> `5`
  - `total` -> `15` (total returns to global execution context)

## Call Stacks in JavaScript

Explanation of call stacks in JavaScript.
