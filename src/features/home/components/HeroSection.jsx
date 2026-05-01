// src/features/home/components/HeroSection.jsx
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 rounded-2xl mb-12">
      <div className="text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">El Cimiento</h1>
        <p className="text-xl mb-6">Construimos el país, ladrillo a ladrillo.</p>
        <Link to="/catalogo">
          <Button variant="primary">Ver productos</Button>
        </Link>
      </div>
    </section>
  );
};