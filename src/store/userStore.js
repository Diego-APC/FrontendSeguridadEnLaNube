// src/store/userStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Usuarios mock (en un entorno real estarían en backend)
const MOCK_USERS = [
  {
    id: 1,
    name: 'Admin Principal',
    email: 'admin@elcimiento.com',
    password: 'admin123',
    role: 'admin',
    avatar: '👷',
    description: 'Administrador del sistema de materiales.'
  },
  {
    id: 2,
    name: 'Carlos Albañil',
    email: 'carlos@example.com',
    password: 'carlos123',
    role: 'user',
    avatar: '🧱',
    description: 'Trabajador de la construcción, busco buenos precios.'
  }
];

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      login: (email, password) => {
        const found = MOCK_USERS.find(u => u.email === email && u.password === password);
        if (found) {
          // No guardamos la contraseña en el estado
          const { password: _, ...userWithoutPassword } = found;
          set({ user: userWithoutPassword, isLoggedIn: true });
          return true;
        }
        return false;
      },
      register: (name, email, password) => {
        // Verificar si ya existe
        if (MOCK_USERS.find(u => u.email === email)) return false;
        const newUser = {
          id: MOCK_USERS.length + 1,
          name,
          email,
          password,
          role: 'user',
          avatar: '👤',
          description: ''
        };
        MOCK_USERS.push(newUser);
        const { password: _, ...userWithoutPassword } = newUser;
        set({ user: userWithoutPassword, isLoggedIn: true });
        return true;
      },
      logout: () => set({ user: null, isLoggedIn: false }),
      updateProfile: (updates) => {
        const currentUser = get().user;
        if (currentUser) {
          const updatedUser = { ...currentUser, ...updates };
          set({ user: updatedUser });
          // También actualizar en MOCK_USERS (simulación)
          const index = MOCK_USERS.findIndex(u => u.id === currentUser.id);
          if (index !== -1) {
            MOCK_USERS[index] = { ...MOCK_USERS[index], ...updates };
          }
        }
      }
    }),
    {
      name: 'user-storage'
    }
  )
);