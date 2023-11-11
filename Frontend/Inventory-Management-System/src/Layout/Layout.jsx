import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/create-inventory" element={<></>} />
        {/* other routes */}
      </Routes>
    </>
  );
};

export default Layout;
