import React from 'react';
import { Provider } from 'react-redux';
import CartPage from './components/CartPage';
import Store from './components/Store'; // Assuming you have a store setup using Redux Toolkit

const App = () => {
  return (
    <div>
      <div>
        <h1 className='text-center p-2 bg-light'>React Redux Cart</h1><hr />
      </div>
      <Provider store={Store}>
      <CartPage />
    </Provider>
    </div>
  );
};

export default App;
