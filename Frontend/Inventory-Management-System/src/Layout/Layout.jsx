import React from 'react';
import Navbar from '../Navbar/Navbar';
import InventoryTable from '../InventoryTable/InventoryTable';
import { Routes, Route } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<InventoryTable />} />
        {/* other routes */}
      </Routes>
    </>
  );
};

export default Layout;
