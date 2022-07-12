import React from 'react';

function Todo({ todo, index, completeTodo, uncompleteTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
      ><li>
        {todo.text} 
        </li>
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => uncompleteTodo(index)}>Incomplete</button>
          <button class="tooltip" style={{backgroundColor: 'rgba(135, 2, 2, 0.927)', marginLeft: '5px'}} onClick={() => removeTodo(index)}>
            Delete<span class="tooltiptext">Permanently Delete?</span></button>
        </div>
      </div>
    );
}
  
export default Todo;