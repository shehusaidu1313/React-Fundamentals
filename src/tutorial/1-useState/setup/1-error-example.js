import React from "react";

const clickHandler = () => {
  console.log("random title");
};

const ErrorExample = () => {
  let title = "Random Title";

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={clickHandler}>
        CLick Me
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
