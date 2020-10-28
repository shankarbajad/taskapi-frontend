import React from 'react';
import './App.css';
import TaskList from "./components/TaskList"
import AddNewTask from "./components/AddNewTask"


function App() {
  return (
    <div className="App">
      <h1>Task List</h1>
      <AddNewTask />
      <TaskList />  
    </div>
  );
}

export default App;
