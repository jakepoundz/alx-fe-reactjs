import React, { useState } from 'react';
const AddTodoForm = ({ onAddTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodoText.trim() !== '') {
      const newTodo = {
        id: Date.now(), // Simple ID generation
        text: newTodoText,
        completed: false,
      };
      onAddTodo(newTodo);
      setNewTodoText('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTodoForm;