import React from 'react';
import { Link } from 'react-router'; 
import Logo from './Logo'; 

function Brand() {
  return (
    <Link to="/" className="flex  justify-center items-center ">
      {/* Logo */}
      <div className="flex-shrink-0  ">
        <Logo className="w-12 h-12" /> 
      </div>
      {/* Texto */}
      <div className="flex items-baseline ">
        <span className="text-3xl font-semibold text-custom-blue">Booking</span>
        <span className="text-3xl font-semibold text-custom-green ml-0">APP&nbsp;</span>
      </div>
    </Link>
  );
}

export default Brand;
