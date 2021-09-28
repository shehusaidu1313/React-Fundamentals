import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  // console.log(setPeople);
  const removeItem = (id) => {
    // filter the items that does not match the passed id
    let newPeople = people.filter((person) => person.id !== id);
    // return the new array,
    setPeople(newPeople);
    console.log(id);
  };
  return (
    <React.Fragment>
      {people.map(({ id, name }) => {
        // const { id, name } = person; // object destructuring
        return (
          <div key={id} className="item">
            <h4>
              {name}: {id}
            </h4>
            <button onClick={() => removeItem(id)}>Delete</button>
          </div>
        );
      })}
      {/* clear the items in the array list */}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </React.Fragment>
  );
};
export default UseStateArray;
