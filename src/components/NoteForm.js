import React from 'react';

function NoteForm({ addNote }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addNote(value);
      setValue("");
    };
    
    return (
        <form class="tooltip" onSubmit={handleSubmit}>
          <textarea rows="4" cols="50"
            type="text"
            placeholder="Add Note"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
          /><span class="tooltiptext">No Character Limit</span>
           <button style={{position: 'absolute'}}>Save</button>
       
        </form>
        
       
      );
      
}

export default NoteForm;