// App.js
import React from 'react';
import GetUsersComponent from './components/GetUsers'; // Importing GetUsersComponent
import AddUserComponent from './components/AddUsers'; // Importing AddUserComponent


const App = () => {
  return (
    <div className='bg-light'>
      <div className='bg-primary p-2'>
        <h1 className='text-center'>User Management System</h1>
      </div>

      <AddUserComponent /> {/* Rendering AddUserComponent */}
      <GetUsersComponent /> {/* Rendering GetUsersComponent */}
    </div>
  );
};

export default App;
