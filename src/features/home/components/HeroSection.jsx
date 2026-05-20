import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import heroBg from '../../../assets/hero-bg.png';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 rounded-2xl mb-12 overflow-hidden">
      {/* Imagen de fondo local */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Contenido */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">El Cimiento</h1>
        <p className="text-xl mb-6">Construimos el país, ladrillo a ladrillo.</p>
        <Link to="/catalogo">
          <Button variant="primary">Ver productos</Button>
        </Link>
      </div>
    </section>
  );
};