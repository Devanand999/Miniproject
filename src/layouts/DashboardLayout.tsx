import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from '../components/head';

const DashboardLayout = () => {
  const navigate = useNavigate();

  

  return (
    
    <div className="flex flex-col h-auto bg-gray-100">
    
    <header className="w-full">
      <Head />
    </header>

    
    <div className="flex flex-1">
     
      <Navbar />

      
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>

    
    <Footer />
  </div>
  );
};

export default DashboardLayout;
