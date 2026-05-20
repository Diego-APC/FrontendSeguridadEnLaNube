// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
// Obtener token del localStorage
const getToken = () => localStorage.getItem('token');

// Petición genérica
async function request(endpoint, method = 'GET', body = null, requiresAuth = false) {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (requiresAuth) {
    const token = getToken();
    if (!token) throw new Error('No autenticado');
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Error en la petición');
  }

  return data;
}

// Endpoints de autenticación
export const authAPI = {
  login: (email, password) => request('/auth/login', 'POST', { email, password }),
  register: (name, email, password) => request('/auth/register', 'POST', { name, email, password }),
  getMe: () => request('/auth/me', 'GET', null, true),
};

// Endpoints de usuarios
export const usersAPI = {
  updateProfile: (userId, data) => request(`/users/${userId}`, 'PUT', data, true),
};

// Endpoints de productos
export const productsAPI = {
  getAll: async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();
  const res = await fetch(`${API_BASE_URL}/products${params ? '?' + params : ''}`);
  return res.json();
  },
  getCategories: () => request('/products/categories'),
  getById: (id) => request(`/products/${id}`),
  create: (productData) => request('/products', 'POST', productData, true),
  update: (id, productData) => request(`/products/${id}`, 'PUT', productData, true),
  delete: (id) => request(`/products/${id}`, 'DELETE', null, true),
};

export const uploadAPI = {
  uploadProductImage: async (file) => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(`${API_BASE_URL}/products/upload-image`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData  // sin Content-Type, fetch lo pone solo con boundary
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Error al subir imagen');
    }
    return res.json(); // { url: "http://..." }
  }
};