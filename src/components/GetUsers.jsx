import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetailsPopup from './UserDetailsPopup'; // Import the UserDetailsPopup component
import UserDetails from './UserDetails';
import UpdateUserComponent from './UpdateUser';
import EditUserPopup from './EditPopUp';

const GetUsersComponent = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = item => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleEditClick = item => {
    console.log("edit button clicked")
    setSelectedItem(item);
    console.log('showEditPopup before:', showEditPopup); // Add this line
    setShowEditPopup(true);
    console.log('showEditPopup after:', showEditPopup); // Add this line
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };

  const handleUpdate = updatedUser => {
    setData(data.map(item => (item.id === updatedUser.id ? updatedUser : item)));
    setShowEditPopup(false);
    alert('User updated successfully!');
  };

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2>{item.name}</h2>
              <button onClick={() => handleClick(item)}>View</button>
              <button onClick={() => handleEditClick(item)}>Edit</button> {/* Fix this line */}
            </div>
          </li>
        ))}
      </ul>
      {showPopup && (
        <UserDetailsPopup user={selectedItem} onClose={handleClosePopup} />
      )}
      {showEditPopup && (
        <UpdateUserComponent user={selectedItem} onUpdate={handleUpdate} onClose={handleCloseEditPopup} />
      )}
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <UserDetails user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default GetUsersComponent;
