import React, { useState, useEffect } from "react";

function TestPage(): JSX.Element {
  const [testArr, setTestArr] = useState<Array<number>>([]);
  return (
    <div>
      <button
        onClick={() => {
          setTestArr((prev) => {
            return [...prev, 0];
          });
          console.log(testArr);
        }}
      >
        클릭
      </button>
      {testArr.map((_, idx) => {
        return <input key={idx} type="text" />;
      })}
    </div>
  );
}

export default TestPage;
