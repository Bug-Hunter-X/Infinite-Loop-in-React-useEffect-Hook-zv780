```javascript
// Buggy component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic causing infinite loop
    setCount(count + 1);
  }, []); // Empty dependency array causes useEffect to run only once
  // But setCount triggers a re-render, which triggers useEffect again infinitely.

  return (
    <div>Count: {count}</div>
  );
}
```