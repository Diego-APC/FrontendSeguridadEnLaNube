// src/features/product/ProductPage.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../../data/products';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../../components/ui/Button';

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const found = products.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
      const related = products
        .filter(p => p.category === found.category && p.id !== found.id)
        .slice(0, 4);
      setRelatedProducts(related);
    } else {
      setProduct(null);
    }
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Producto no encontrado</h2>
        <Link to="/catalogo" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs text-gray-500 mb-4">
        <Link to="/" className="hover:underline">Inicio</Link> &gt;
        <Link to="/catalogo" className="hover:underline ml-1">Catálogo</Link> &gt;
        <span className="ml-1">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Imagen */}
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Detalles */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-2">{product.category} / {product.subcategory}</p>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toLocaleString()}</p>
          
          <div className="mb-4">
            <span className="font-semibold">Stock:</span> 
            <span className={`ml-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} unidades` : 'Agotado'}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-1">Descripción:</h3>
            <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
          </div>

          {product.stock > 0 && (
            <div className="flex items-center gap-4 mb-6">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium mb-1">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))}
              className="w-24 px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
              </div>
              <Button onClick={handleAddToCart} variant="primary" className="mt-6">
                Agregar al carrito
              </Button>
            </div>
          )}

          <Link to="/catalogo" className="text-blue-600 hover:underline inline-block mt-4">
            ← Seguir comprando
          </Link>
        </div>
      </div>

      {/* Productos relacionados */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(rel => (
              <Link to={`/producto/${rel.id}`} key={rel.id} className="border rounded-lg p-3 hover:shadow-lg transition">
                <img src={rel.image} alt={rel.name} className="w-full h-32 object-cover rounded" />
                <h3 className="font-semibold mt-2">{rel.name}</h3>
                <p className="text-blue-600">${rel.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* NOTA PARA EL LABORATORIO: Aquí se podría agregar una sección de reseñas vulnerable a XSS
          si se implementa un formulario que muestre comentarios sin sanitizar. */}

    </div>
  );
};