// src/features/catalog/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { useCartStore } from '../../../store/cartStore';

export const ProductCard = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  
  return (
    <Card className="h-full flex flex-col">
      <Link to={`/producto/${product.id}`}>
        <Card.Image src={product.image} alt={product.name} />
      </Link>
      <Card.Content className="flex-1 flex flex-col">
        <Link to={`/producto/${product.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-auto pt-3">
          <p className="text-xl font-bold text-gray-900 dark:text-white">${product.price.toLocaleString()}</p>
          <Button 
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }} 
            variant="secondary" 
            className="w-full mt-2"
          >
            Agregar al carrito
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};