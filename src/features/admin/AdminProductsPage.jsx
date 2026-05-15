import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { useProductStore } from '../../store/productStore';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const AdminProductsPage = () => {
  const { user, isLoggedIn } = useUserStore();
  const { products, fetchProducts, updateProduct, loading } = useProductStore();
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', price: '', description: '', image: '' });
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    if (isLoggedIn && user?.role === 'admin') {
      fetchProducts();
    }
  }, [isLoggedIn, user]);

  // Verificar permisos
  useEffect(() => {
    if (!isLoggedIn || user?.role !== 'admin') {
      alert('Acceso denegado. Solo administradores.');
      navigate('/');
    }
  }, [isLoggedIn, user, navigate]);

  const startEdit = (product) => {
    setEditingId(product.id);
    setEditForm({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
    });
    setPreviewImage(product.image);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result;
      setEditForm({ ...editForm, image: dataUrl });
      setPreviewImage(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const saveEdit = async (id) => {
    try {
      await updateProduct(id, {
        name: editForm.name,
        price: parseFloat(editForm.price),
        description: editForm.description,
        image: editForm.image,
      });
      setEditingId(null);
      setPreviewImage('');
    } catch (error) {
      alert('Error al actualizar: ' + error.message);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setPreviewImage('');
  };

  if (!isLoggedIn || user?.role !== 'admin') {
    return null;
  }

  if (loading && products.length === 0) {
    return <div className="text-center py-10">Cargando productos...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Administración de productos</h1>
        <Button variant="secondary" onClick={() => navigate('/catalogo')}>
          Ver tienda
        </Button>
      </div>

      <div className="mb-4 p-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-sm rounded border border-red-300">
        ⚠️ <strong>Laboratorio XSS</strong>: Puedes subir imágenes, incluyendo archivos SVG que ejecuten JavaScript. ¡Úsalo para practicar!
      </div>

      <div className="grid grid-cols-1 gap-4">
        {products.map(product => (
          <Card key={product.id} className="p-4">
            {editingId === product.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={editForm.name}
                  onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                  className="w-full p-2 border-2 rounded dark:bg-gray-800"
                />
                <input
                  type="number"
                  placeholder="Precio"
                  value={editForm.price}
                  onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                  className="w-full p-2 border-2 rounded dark:bg-gray-800"
                />
                <textarea
                  placeholder="Descripción"
                  value={editForm.description}
                  onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                  className="w-full p-2 border-2 rounded dark:bg-gray-800"
                  rows="2"
                />
                <div>
                  <label className="block text-sm font-medium mb-1">Imagen del producto</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full p-2 border-2 rounded dark:bg-gray-800"
                  />
                  {previewImage && (
                    <div className="mt-2">
                      <img src={previewImage} alt="Vista previa" className="w-32 h-32 object-cover rounded" />
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => saveEdit(product.id)} variant="primary">Guardar</Button>
                  <Button onClick={cancelEdit} variant="secondary">Cancelar</Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-500">Precio: ${product.price.toLocaleString()}</p>
                  <p className="text-sm">{product.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                  <Button onClick={() => startEdit(product)} variant="secondary">
                    Editar
                  </Button>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};