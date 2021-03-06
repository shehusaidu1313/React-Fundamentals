import React, { useEffect, useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show || <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(window);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    // cleanup function
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ margingTop: "2rem" }}>
      <h1>Window</h1>
      <h2>Size: {size}px</h2>
    </div>
  );
};
export default ShowHide;
