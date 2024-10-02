import "./App.css";
import Lists from "./Lists";
import { useState } from "react";

function App() {
  const [input, setInputtext] = useState("");
  const [taskList, setTasklist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const getValue = (val) => {
    setInputtext(val.target.value);
  };

  const editData = (index) => {
    setInputtext(taskList[index]);
    setEditIndex(index);
  };

  const List = () => {
    if (input === "") {
      alert("Please enter something");
    } else {
      console.log(editIndex !== null, editIndex);
      if (editIndex !== null) {
        const updatedTasks = [...taskList];
        console.log(updatedTasks, input);
        updatedTasks[editIndex] = input;
        console.log(updatedTasks);

        setTasklist(updatedTasks);
        setEditIndex(null);
      } else {
        // const value = localStorage.setItem("v1", taskList);

        setTasklist([...taskList, input]);
      }
      setInputtext("");
    }
  };

  return (
    <div className="App">
      <div className="box">
        <h1 style={{ padding: "40px 0px 0px 0px" }}>
          <span style={{ margin: " 0px 10px 0px 0px" }}>
            <i className="fa-solid fa-pen-to-square fa-sm"></i>
          </span>
          To-do List
        </h1>
        <input
          placeholder="Enter task"
          type="text"
          value={input}
          onChange={getValue}
          required
        />
        <button onClick={List}>
          {editIndex !== null ? "Update Task" : "Add Task"}x
        </button>
        <Lists
          ListItem={taskList}
          listUpdater={setTasklist}
          editdata={editData}
        />
      </div>
    </div>
  );
}

export default App;
