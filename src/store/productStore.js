// src/store/productStore.js
import { create } from 'zustand';
import { productsAPI } from '../services/api';

export const useProductStore = create((set, get) => ({
  products: [],
  categories: [],
  loading: false,
  error: null,

  fetchProducts: async (filters = {}) => {
    set({ loading: true, error: null });
    try {
      const data = await productsAPI.getAll(filters);
      set({ products: data, loading: false });
      return data;
    } catch (error) {
      set({ error: error.message, loading: false });
      return [];
    }
  },

  fetchCategories: async () => {
    try {
      const data = await productsAPI.getCategories();
      set({ categories: data });
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  fetchProductById: async (id) => {
    set({ loading: true });
    try {
      const product = await productsAPI.getById(id);
      set({ loading: false });
      return product;
    } catch (error) {
      set({ error: error.message, loading: false });
      return null;
    }
  },

  // Admin actions
  createProduct: async (productData) => {
    try {
      const newProduct = await productsAPI.create(productData);
      set((state) => ({ products: [...state.products, newProduct] }));
      return newProduct;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateProduct: async (id, productData) => {
    try {
      const updated = await productsAPI.update(id, productData);
      set((state) => ({
        products: state.products.map((p) => (p.id === id ? updated : p)),
      }));
      return updated;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteProduct: async (id) => {
    try {
      await productsAPI.delete(id);
      set((state) => ({
        products: state.products.filter((p) => p.id !== id),
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
}));