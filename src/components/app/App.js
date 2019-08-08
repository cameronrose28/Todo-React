import React from "react";
import "./App.css";
import ToDo from "../ToDo";
import ToDoItem from "../ToDoItem";
import NavBar from "../NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          <ToDo/>
          <ToDoItem/>
        </div>
      </div>
    );
  }
}

export default App;
