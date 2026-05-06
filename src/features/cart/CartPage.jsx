// src/features/cart/CartPage.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export const CartPage = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, totalItems } = useCartStore();
  const navigate = useNavigate();

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    alert(`✅ Compra simulada por $${totalPrice().toLocaleString()}. ¡Gracias por confiar en El Cimiento!`);
    clearCart();
    navigate('/catalogo');
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="text-7xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-4">Parece que aún no has agregado ningún producto.</p>
        <Link to="/catalogo">
          <Button variant="primary">Ir al catálogo</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mi carrito de compras</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Lista de productos */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="p-4 flex flex-col sm:flex-row gap-4 items-center">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <Link to={`/producto/${item.id}`} className="font-bold text-lg hover:text-blue-600">
                  {item.name}
                </Link>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="font-semibold">${item.price.toLocaleString()} c/u</p>
              </div>
              
              <div className="flex items-center gap-2">
                <label className="text-sm">Cantidad:</label>
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                    className="w-20 px-2 py-1 border-2 border-gray-300 dark:border-gray-600 rounded-md text-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="text-right min-w-[120px]">
                <p className="font-bold text-lg">${(item.price * item.quantity).toLocaleString()}</p>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm underline"
                >
                  Eliminar
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Resumen del carrito */}
        <div className="lg:w-80">
          <Card className="p-4 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Resumen</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Productos:</span>
                <span>{totalItems()} unidades</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>${totalPrice().toLocaleString()}</span>
              </div>
            </div>
            <Button onClick={handleCheckout} variant="primary" className="w-full mb-2">
              Finalizar compra
            </Button>
            <Button onClick={() => navigate('/catalogo')} variant="secondary" className="w-full">
              Seguir comprando
            </Button>
            <button 
              onClick={clearCart}
              className="w-full mt-3 text-sm text-red-500 hover:text-red-700 underline"
            >
              Vaciar carrito
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};