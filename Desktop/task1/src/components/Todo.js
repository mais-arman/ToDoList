import React, { useState } from 'react';
import '../style/styles.css';

const Todo = ({ id, task, onDelete, onEdit }) => {
  const [isCompleted, setCompleted] = useState(false);

  const handleToggleComplete = () => {
    setCompleted(!isCompleted);
  };

  return (
    <div style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      <input type="checkbox" onChange={handleToggleComplete} />
      <span>{task}</span>
      <button className='Delete' onClick={() => onDelete(id)}>Delete</button>
      <button className='Edit' onClick={() => onEdit(id, task)}>Edit</button>
    </div>
  );
};

export default Todo;

