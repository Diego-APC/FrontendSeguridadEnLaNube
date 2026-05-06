// src/router/AppRouter.jsx
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../features/home/HomePage';
import { CatalogPage } from '../features/catalog/CatalogPage';
import { ProductPage } from '../features/product/ProductPage';
import { CartPage } from '../features/cart/CartPage';
import { AboutPage } from '../features/about/AboutPage';
import { PerfilPage } from '../features/perfil/PerfilPage';
import { LoginPage } from '../features/auth/LoginPage';
import { RegisterPage } from '../features/auth/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'catalogo', element: <CatalogPage /> },
      { path: 'producto/:id', element: <ProductPage /> },
      { path: 'carrito', element: <CartPage /> },
      { path: 'nosotros', element: <AboutPage /> },
      { path: 'perfil', element: <PerfilPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'registro', element: <RegisterPage /> }
    ]
  }
]);