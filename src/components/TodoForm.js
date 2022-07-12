import React from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
    
    return (
        <form class="tooltip" onSubmit={handleSubmit}>
       
          <input 
            type="text"
            placeholder="Add Bullet"
            value={value}
            onChange={e => setValue(e.target.value)} 
          /><span class="tooltiptext">Add Unlimited Bullets</span>
           <button>Add</button>
           
        </form>
        
       
      );
      
}

export default TodoForm;