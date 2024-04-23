// TodoForm.jsx
import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, editedTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editedTodo) {
      setTaskName(editedTodo.taskName);
      setDescription(editedTodo.description);
    }
  }, [editedTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !description.trim()) return;

    if (editedTodo) {
      editTodo(editedTodo.id, taskName, description);
    } else {
      addTodo({
        id: new Date().getTime(), // Generate unique id
        taskName,
        description,
        status: 'not completed'
      });
    }

    setTaskName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">{editedTodo ? 'Update Todo' : 'Add Todo'}</button>
    </form>
  );
};

export default TodoForm;
