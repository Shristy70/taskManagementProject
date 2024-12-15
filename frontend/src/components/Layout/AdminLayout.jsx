import React from 'react';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-primary">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto ">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;