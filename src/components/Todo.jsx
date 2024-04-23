// Todo.jsx
import React from 'react';

const Todo = ({ todo, onDelete, onUpdate, onStatusChange, setEditedTodo }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    onStatusChange(todo.id, newStatus);
  };

  const handleEdit = () => {
    setEditedTodo(todo);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTaskName = e.target.elements.taskName.value.trim();
    const updatedDescription = e.target.elements.description.value.trim();
    const updatedStatus = e.target.elements.status.value;
    onUpdate(todo.id, updatedTaskName, updatedDescription, updatedStatus);
  };

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">Name: {todo.taskName}</p>
        <p className="card-text">Description: {todo.description}</p>
        <p className="card-text">Status: {todo.status}</p>
        <form onSubmit={handleUpdate}>
          <select className="form-select mb-2" name="status" value={todo.status} onChange={handleStatusChange}>
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
          <div>
            <button type="button" className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
            <button type="submit" className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Todo;
