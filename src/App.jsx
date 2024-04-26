// App.js
import React from 'react';
import GetUsersComponent from './components/GetUsers';
import AddUserComponent from './components/AddUsers';


const App = () => {
  return (
    <div>
      <h1>User Management System</h1>

      <AddUserComponent />

      {/* Display list of users */}
      <GetUsersComponent />
    </div>
  );
};

export default App;
