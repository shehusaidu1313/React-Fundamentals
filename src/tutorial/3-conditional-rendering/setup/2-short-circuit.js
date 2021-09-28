import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  // console.log(secondValue);

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1> Value:{secondValue}</h1> */}
      <h1>{text || "S Square Dev"}</h1>
      {/* to toggle it we can use the code below */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toogle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is Error</p> : <h1>There is no error</h1>}
      {/* {!text && <h1>Hello Shehu Saidu</h1>} */}
    </>
  );
};

export default ShortCircuit;
