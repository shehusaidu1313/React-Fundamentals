import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Shehu Saidu",
    age: 24,
    message: "This is my Message",
  });

  const [name, setName] = useState("Usman");
  const [age, setAge] = useState(30);
  const [message, setMessage] = useState("I am very happy");
  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" }); // copy all the properties of person and change the message
    if (message === "I am very happy") {
      setMessage("Hello World");
    } else {
      setMessage("I am very happy");
    }
  };
  // console.log(person);
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
