The solution involves using optional chaining and nullish coalescing to safely access properties.  This avoids the error by returning undefined or a default value if the property is null or undefined.

```javascript
// Solution using optional chaining and nullish coalescing
const MyComponent = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name ?? 'Unknown'}</Text> 
    </View>
  );
};
```

Optional chaining (`?.`) allows you to safely access nested properties.  If any part of the chain is null or undefined, the expression short-circuits and returns undefined. The nullish coalescing operator (`??`) provides a fallback value if the expression on its left is null or undefined.