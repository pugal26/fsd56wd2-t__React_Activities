// App.js
import React from 'react';
import AddBook from './components/AddBook'; 
import GetBook from './components/GetBook'; 


const App = () => {
  return (
    <div className='bg-light'>
      <div className='bg-dark text-light p-2'>
        <h1 className='text-center'>Library Management System</h1>
      </div>

      <AddBook /> {/* Rendering AddBookComponent */}
      <GetBook /> {/* Rendering GetBookComponent */}
    </div>
  );
};

export default App;
