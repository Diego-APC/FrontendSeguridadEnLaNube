import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export const PerfilPage = () => {
  const { user, isLoggedIn, logout, updateProfile } = useUserStore();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editDescription, setEditDescription] = useState(user?.description || '');

  // Inyectar la descripción de forma insegura (XSS)
  useEffect(() => {
    const descContainer = document.getElementById('descripcion-insegura');
    if (descContainer && user?.description) {
      descContainer.innerHTML = user.description;
    }
  }, [user?.description]);

  if (!isLoggedIn) {
    return (
      <div className="text-center py-10">
        <p className="text-xl">Debes iniciar sesión para ver tu perfil.</p>
        <Button variant="primary" className="mt-4" onClick={() => navigate('/login')}>
          Ir a login
        </Button>
      </div>
    );
  }

  const isAdmin = user?.role === 'admin';

  const handleSave = async () => {
  const success = await updateProfile({ name: editName, description: editDescription });
  if (success) setEditing(false);
  else alert('Error al actualizar perfil');
  };

  return (
    <Card className="max-w-4xl mx-auto p-6">
      {/* Aviso del laboratorio */}
      <div className="mb-4 p-2 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 text-sm rounded border border-yellow-300">
        ⚠️ <strong>Laboratorio XSS</strong>: La descripción del perfil es vulnerable. Inyecta código para habilitar el botón de administración.
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Columna izquierda */}
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-5xl">{user.avatar || '👤'}</div>
            <div>
              {editing ? (
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="text-2xl font-bold border-2 border-gray-300 dark:border-gray-600 rounded px-2 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              ) : (
                <h2 className="text-2xl font-bold">{user.name}</h2>
              )}
              <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
              <p className="text-sm mt-1">
                Rol: <span className="font-mono">{user.role}</span>
              </p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Descripción</label>
            {editing ? (
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Escribe algo (puedes inyectar HTML/JS)"
              />
            ) : (
              <div 
                id="descripcion-insegura"
                className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 p-2 rounded border border-gray-200 dark:border-gray-600 prose prose-sm max-w-none"
              />
            )}
          </div>

          {editing ? (
            <div className="flex gap-2">
              <Button variant="primary" onClick={handleSave}>Guardar cambios</Button>
              <Button variant="secondary" onClick={() => setEditing(false)}>Cancelar</Button>
            </div>
          ) : (
            <Button variant="secondary" onClick={() => setEditing(true)}>Editar perfil</Button>
          )}

          <div className="mt-6">
            <Button variant="secondary" onClick={logout}>Cerrar sesión</Button>
          </div>
        </div>

        {/* Columna derecha solo para admin */}
        {isAdmin && (
          <div className="w-full md:w-64 border-l border-gray-200 dark:border-gray-700 pl-6">
            <h3 className="text-xl font-semibold mb-3">Configuración de la página</h3>
            <ul className="space-y-3">
              <li>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                  ⚙️ General
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                  🧾 Pedidos
                </button>
              </li>
              <li>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                  </p>
                  <button
                    id="edit-products-btn"
                    onClick={() => navigate('/admin/dashboard-productos')}
                    className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white opacity-50 pointer-events-none"
                  >
                    ✏️ Editar productos
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
};