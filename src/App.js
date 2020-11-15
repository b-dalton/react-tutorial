import React from 'react';
import ToDoList from './ToDoList';

function App() {
  return (
    <div>
      <ToDoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear completed</button>
      <div>0 left to do</div>
    </div>
  )
}

export default App;
