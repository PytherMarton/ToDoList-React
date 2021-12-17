import { useState } from "react";
import "./App.css";
import { EditText } from 'react-edit-text';

const App = () => {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState([]);

  const addHandler = () => {
    const newArray = [...list];
    newArray.push(userInput);
    setList(newArray);
    setUserInput("");
  };

  const removeHandler = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setList(newArray);
  };

  const update = (event) => {
    setUserInput(event.target.value);
  };

  const selectShortlistedApplicant = (e) => {
    const checked = e.target.checked;
    if (checked) {
      alert("Done!")
    } else {
      alert("Undone!")
    }
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <input value={userInput} type="text" placeholder="List a new ToDo" onChange={update} />
      <button type="submit" onClick={addHandler}>
        Add a new ToDo
      </button>
      {list.map((item, index) => {
        return (
          <div class="list">
            <h2 key={index}><EditText defaultValue= {item} type="text"/></h2>
            <input
              type="checkbox"
              onClick={(e) => {
                selectShortlistedApplicant(e);
              }}
            ></input>
            <button onClick={() => removeHandler(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
