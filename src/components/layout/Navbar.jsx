// src/components/layout/Navbar.jsx
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { useUserStore } from '../../store/userStore';

export const Navbar = () => {
  const totalItems = useCartStore((state) => state.totalItems());
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <nav className="bg-gray-900 dark:bg-gray-950 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">El Cimiento</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Inicio</Link>
          <Link to="/catalogo" className="hover:text-blue-400">Catálogo</Link>
          <Link to="/nosotros" className="hover:text-blue-400">Sobre Nosotros</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/carrito" className="relative">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {totalItems}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <Link to="/perfil" className="text-2xl hover:text-blue-400 transition">
              👤
            </Link>
          ) : (
            <Link to="/login" className="hover:text-blue-400 transition">
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};