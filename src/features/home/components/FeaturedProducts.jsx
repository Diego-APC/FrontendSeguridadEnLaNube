// src/features/home/components/FeaturedProducts.jsx
import { products } from '../../../data/products';
import { ProductCard } from '../../catalog/components/ProductCard';

export const FeaturedProducts = () => {
  // Tomamos los primeros 3 productos como destacados (puedes cambiar el criterio)
  const featured = products.slice(0, 3);

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