import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function bigFunc() {
  console.log("Running big function");
  return "big function";
}

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Render Component");
  }, []);

  const val = useMemo(() => {
    return bigFunc();
  }, []);

  return (
    <div>
      <h1>Count - {count} & {val}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
