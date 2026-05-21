import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <Link to="/brickwall" className="hover:text-white transition">
          <p>Construimos el país, ladrillo a ladrillo.™</p>
        </Link>
        <p className="text-sm mt-2">Laboratorio educativo - El Cimiento - Vulnerabilidades controladas</p>
      </div>
    </footer>
  );
};