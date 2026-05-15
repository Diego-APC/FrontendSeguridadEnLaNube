// src/services/api.js
const API_BASE_URL = 'http://localhost:3000/api'; // Cambia según tu puerto

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
  getAll: (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    return request(`/products${params ? `?${params}` : ''}`);
  },
  getCategories: () => request('/products/categories'),
  getById: (id) => request(`/products/${id}`),
  create: (productData) => request('/products', 'POST', productData, true),
  update: (id, productData) => request(`/products/${id}`, 'PUT', productData, true),
  delete: (id) => request(`/products/${id}`, 'DELETE', null, true),
};