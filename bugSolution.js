```javascript
// Correct component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic - sets count only once
    console.log('useEffect runs');
  }, [count]); // Add count as a dependency

  return (
    <div>Count: {count}</div>
  );
}
```