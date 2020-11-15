import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [todos, setToDos] = useState([{ id: 1, name: 'Todo 1', complete: false}]);
  return (
    <div>
      <ToDoList todos={todos}/>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear completed</button>
      <div>0 left to do</div>
    </div>
  )
}

export default App;
