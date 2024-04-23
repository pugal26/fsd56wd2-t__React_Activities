// TodoApp.jsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  const [filter, setFilter] = useState('all');

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to update a todo
  const updateTodo = (id, updatedTaskName, updatedDescription, updatedStatus) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, taskName: updatedTaskName, description: updatedDescription, status: updatedStatus } : todo)));
    setEditedTodo(null);
  };

  // Function to handle status change
  const handleStatusChange = (id, newStatus) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status: newStatus } : todo)));
  };

  // Function to handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter the todos based on the selected filter option
  const filteredTodos = filter === 'all' ? todos :
                        filter === 'completed' ? todos.filter(todo => todo.status === 'completed') :
                        todos.filter(todo => todo.status === 'not completed');

  return (
    <div className="mt-5">
      <TodoForm addTodo={addTodo} editTodo={updateTodo} editedTodo={editedTodo} />
      <div className="mt-3">
        <label htmlFor="filter" className="me-2">Filter:</label>
        <select id="filter" className="form-select" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
      <hr />
      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
        onStatusChange={handleStatusChange}
        setEditedTodo={setEditedTodo}
      />
    </div>
  );
};

export default TodoApp;
