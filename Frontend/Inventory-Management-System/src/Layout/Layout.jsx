import React from 'react';
import Navbar from '../Navbar/Navbar';
import InventoryTable from '../InventoryTable/InventoryTable';
import CreateInventoryItem from '../CreateInventoryItem/CreateInventoryItem';
import { Routes, Route } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<InventoryTable />} />
        <Route path="/createInventory" element={<CreateInventoryItem />} />
        {/* other routes */}
      </Routes>
    </>
  );
};

export default Layout;
