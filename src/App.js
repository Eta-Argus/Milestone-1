import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.js";
import Todo from "./components/Todo.js"
import NoteForm from "./components/NoteForm.js"
import Note from "./components/Note.js"


function App() {
  const [todos, setTodos] = React.useState([]);
  const [notes, setNotes]= React.useState([]);

  const addNote = text => {
    const newNotes = [...notes, { text }];
    setNotes(newNotes);
  };
  
  const removeNote = index => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const uncompleteTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };
 
  return (
    <div className="app">
      <header>
        <h1>To Do</h1>
      </header>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            uncompleteTodo={uncompleteTodo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
        <h1>Notes</h1> 
      <div className="textbox">
      {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            note={note}
            removeNote={removeNote}
          />
        ))}
      <NoteForm addNote={addNote} />

      </div>
    </div>

  );
  
}

export default App;