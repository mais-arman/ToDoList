import React, { useState } from 'react';
import Todo from './Todo';
import '../style/styles.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Study for the exam' },
    { id: 2, task: 'Project work' },
    { id: 3, task: 'Web assignment submission' },
    { id: 4, task: 'Clean the house' },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, task: newTask }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTask = (id, currentTask) => {
    const updatedTask = prompt('Edit task:', currentTask);
    if (updatedTask !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      );
      setTodos(updatedTodos);
    }
  };

  return (
    <div>
      <h2>To do List</h2>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='Add ' onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TodoList;

