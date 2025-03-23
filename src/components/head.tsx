import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LogOut, User } from "lucide-react";


const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  
const handleLogout = () => {
  localStorage.removeItem('isAuthenticated'); 
  navigate('/login'); 
};

  return (
    <header className="bg-white shadow-md py-3 px-6 flex items-center justify-between">
    
  <div>
    
  </div>


      <div className="flex items-center space-x-3">
        
      <div className="relative">
  
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition"
      >
        <User size={24} className="text-white" />
      </button>

      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 w-full text-red-600 hover:bg-gray-100 rounded-lg"
          >
            <LogOut size={8} />
            Logout
          </button>
        </div>
      )}
    </div>
      </div>
    </header>
  );
};


export default Header;
