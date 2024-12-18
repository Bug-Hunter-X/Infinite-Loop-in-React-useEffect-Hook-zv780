# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrect usage of the `useEffect` hook.  The bug is caused by updating the state variable `count` within the `useEffect` hook's callback function, leading to an infinite rendering cycle.

## Bug Description
The `MyComponent` component uses `useState` to manage a count.  The `useEffect` hook, with an empty dependency array `[]`, is intended to run only once after the initial render.  However, the `setCount(count + 1)` line inside the `useEffect` function causes a re-render, which triggers the `useEffect` hook again, leading to an infinite loop.

## Bug Solution
The solution involves a proper dependency update strategy. The `useEffect` hook now takes `count` as a dependency. It runs only when `count` changes, preventing the infinite loop.