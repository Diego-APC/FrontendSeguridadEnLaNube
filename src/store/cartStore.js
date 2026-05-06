// src/store/cartStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const existing = get().items.find(item => item.id === product.id);
        if (existing) {
          set({
            items: get().items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({ items: [...get().items, { ...product, quantity: 1 }] });
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter(item => item.id !== id) });
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
        } else {
          set({
            items: get().items.map(item =>
              item.id === id ? { ...item, quantity } : item
            )
          });
        }
      },
      
      clearCart: () => set({ items: [] }),
      
      totalItems: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
      
      totalPrice: () => {
        return get().items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      },
      
      // Función adicional para incrementar/decrementar rápidamente
      increment: (id) => {
        const item = get().items.find(i => i.id === id);
        if (item) {
          get().updateQuantity(id, item.quantity + 1);
        }
      },
      
      decrement: (id) => {
        const item = get().items.find(i => i.id === id);
        if (item && item.quantity > 1) {
          get().updateQuantity(id, item.quantity - 1);
        } else if (item && item.quantity === 1) {
          get().removeItem(id);
        }
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);