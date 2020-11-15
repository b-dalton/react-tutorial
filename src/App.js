import React, { useState, useRef } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setToDos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(event) {
    const name = todoNameRef.current.value
    if (name === '') return
    setToDos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <div>
      <ToDoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear completed</button>
      <div>0 left to do</div>
    </div>
  )
}

export default App;
