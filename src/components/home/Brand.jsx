import React from 'react';
import { Link } from 'react-router'; // Cambié a `react-router-dom` ya que `react-router` está deprecado.
import Logo from './Logo'; // Asegúrate de importar el archivo correcto.

function Brand() {
  return (
    <Link to="/" className="flex items-center ">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Logo className="w-12 h-12" /> {/* Asegúrate de que el tamaño sea proporcional */}
      </div>
      {/* Texto */}
      <div className="flex items-baseline">
        <span className="text-3xl font-semibold text-custom-blue">Booking</span>
        <span className="text-3xl font-semibold text-custom-green ml-0">APP&nbsp;</span>
      </div>
    </Link>
  );
}

export default Brand;
