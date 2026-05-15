// src/features/home/components/FeaturedProducts.jsx
import { useEffect } from 'react';
import { useProductStore } from '../../../store/productStore';
import { ProductCard } from '../../catalog/components/ProductCard';

export const FeaturedProducts = () => {
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    if (products.length === 0 && !loading) {
      fetchProducts();
    }
  }, []);

  // Tomar los primeros 3 productos como destacados (puedes cambiar el criterio)
  const featured = products.slice(0, 3);

  if (loading && products.length === 0) {
    return (
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
        <div className="text-center text-gray-500">Cargando productos...</div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};