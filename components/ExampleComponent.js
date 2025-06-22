// components/ExampleComponent.js

import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0); // Using useState

  // Using useEffect to log when the component mounts or when count changes
  useEffect(() => {
    console.log("Component mounted or count changed");
  }, [count]); // Effect depends on the count state

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleComponent;
