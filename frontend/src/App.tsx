import { useState } from "react";
import "./styles.css";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h1>Hello, world, {process.env.NODE_ENV}</h1>
      <button
        onClick={() => {
          setCount((prev: number) => {
            return prev + 1;
          });
        }}
      >
        count: {count}
      </button>
    </div>
  );
}

export default App;
