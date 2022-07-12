import React from 'react';

function Note({ note, index, removeNote}) {
    return (
      <div
        className="todo"
        style={{ textDecoration: note.isCompleted ? "line-through" : ""}}
      >
        {note.text} 
        <div>
        <button class="tooltip" style={{backgroundColor: 'rgba(135, 2, 2, 0.927)', marginLeft: '5px'}} onClick={() => removeNote(index)}>
            Delete<span class="tooltiptext">Permanently Delete?</span></button>
        </div>
      </div>
    );
}
  
export default Note;