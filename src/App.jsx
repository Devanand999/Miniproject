import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';


import AddCustomer from './pages/customers/AddCustomer';
import ManageCustomers from './pages/customers/ManageCustomers';


import AddFoodCategory from './pages/food-category/AddFoodCategory';
import ManageFoodCategories from './pages/food-category/ManageFoodCategories';


import AddFood from './pages/food/AddFood';
import ManageFood from './pages/food/ManageFood';


import CreateInvoice from './pages/invoices/CreateInvoice';
import ManageInvoices from './pages/invoices/ManageInvoices';


import Head from './components/head';


const UserPage = () => <div className="text-center mt-20 text-2xl">Welcome userrrr</div>;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');



  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated') === 'true';
    const role = localStorage.getItem('userRole') || '';

    setIsAuthenticated(auth);
    setUserRole(role);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />}
        />

       
        {isAuthenticated && userRole === 'user' && (
          <Route path="/user-page" element={<UserPage />} />
        )}

        
        {isAuthenticated && userRole === 'admin' && (
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />

            
            <Route path="customers/add" element={<AddCustomer />} />
            <Route path="customers/manage" element={<ManageCustomers />} />

           
            <Route path="food-category/add" element={<AddFoodCategory />} />
            <Route path="food-category/manage" element={<ManageFoodCategories />} />

            
            <Route path="food/add" element={<AddFood />} />
            <Route path="food/manage" element={<ManageFood />} />

            
            <Route path="invoices/create" element={<CreateInvoice />} />
            <Route path="invoices/manage" element={<ManageInvoices />} />

        
            <Route path="reports" element={<div>Reports Page</div>} />
            <Route path="settings" element={<div>Settings Page</div>} />
          </Route>
        )}

    
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
