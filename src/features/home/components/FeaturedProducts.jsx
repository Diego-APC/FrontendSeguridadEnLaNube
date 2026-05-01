// src/features/home/components/FeaturedProducts.jsx
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { products } from '../../../data/products';
import { useCartStore } from '../../../store/cartStore';

export const FeaturedProducts = () => {
  const addItem = useCartStore((state) => state.addItem);
  const featured = products.slice(0, 3); // Muestra los primeros 3 productos

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((product) => (
          <Card key={product.id}>
            <Card.Image src={product.image} alt={product.name} />
            <Card.Content>
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-1">${product.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
              <div className="mt-4">
                <Button onClick={() => addItem(product)} variant="secondary" className="w-full">
                  Agregar al carrito
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
};