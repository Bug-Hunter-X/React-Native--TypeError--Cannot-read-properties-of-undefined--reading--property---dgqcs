# React Native: TypeError: Cannot read properties of undefined (reading 'property')

This repository demonstrates a common error in React Native: attempting to access a property of an object that is null or undefined.  The error typically arises when dealing with asynchronous data fetching, where components render before the data is fully loaded. The solution involves using optional chaining or nullish coalescing operators to safely access properties.

## Bug
The `bug.js` file showcases the problematic code. It fetches user data and attempts to render the user's name before checking if the data is available.  This results in the `TypeError: Cannot read properties of undefined (reading 'property')` error when `user` is still null.

## Solution
The `bugSolution.js` file provides a solution using optional chaining (`?.`) and the nullish coalescing operator (`??`). These operators ensure that the code gracefully handles null or undefined values, preventing the error.