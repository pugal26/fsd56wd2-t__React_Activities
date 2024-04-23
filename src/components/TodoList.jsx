// TodoList.jsx
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelete, onUpdate, onStatusChange, setEditedTodo }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {todos.map(todo => (
        <div className="col" key={todo.id}>
          <Todo
            todo={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onStatusChange={onStatusChange}
            setEditedTodo={setEditedTodo}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
