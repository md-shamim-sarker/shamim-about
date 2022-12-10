import React from 'react';
import {Toaster} from 'react-hot-toast';
import {RouterProvider} from 'react-router-dom';
import router from './router/router';

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
};

export default App;