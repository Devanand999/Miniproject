import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className=" text-grey-500 py-4 px-8 mt-auto">
      <div className="text-center">
        <p>&copy; {currentYear} Miniproject . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;