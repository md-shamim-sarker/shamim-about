import React from 'react';
import {Toaster} from 'react-hot-toast';
import Home from './pages/Home/Home/Home';

const App = () => {
  return (
    <>
      <Home></Home>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
};

export default App;