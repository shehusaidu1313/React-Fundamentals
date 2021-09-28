import React, { useState } from "react";

const UseStateBasics = () => {
  // initial State to be rendered
  const [note, setNote] = useState("random title");
  const [learn, setLearn] = useState("I am learning ");

  const handleClick = () => {
    if (note === "random title") {
      setNote("Hello World");
    } else {
      setNote("random title");
    }
  };
  const handleClk = () => {
    if (learn === "I am learning ") {
      setLearn("I will be successful God willing");
    } else {
      setLearn("I am learning ");
    }
  };
  return (
    <React.Fragment>
      <h1>{note}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
      <h1>{learn}</h1>
      <button type="button" className="btn" onClick={handleClk}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
