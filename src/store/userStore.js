// src/store/userStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authAPI, usersAPI } from '../services/api';

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      token: null,

      login: async (email, password) => {
        try {
          const data = await authAPI.login(email, password);
          localStorage.setItem('token', data.token);
          set({ user: data.user, isLoggedIn: true, token: data.token });
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      },

      register: async (name, email, password) => {
        try {
          const data = await authAPI.register(name, email, password);
          localStorage.setItem('token', data.token);
          set({ user: data.user, isLoggedIn: true, token: data.token });
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      },

      logout: () => {
        localStorage.removeItem('token');
        set({ user: null, isLoggedIn: false, token: null });
      },

      updateProfile: async (updates) => {
        const { user } = get();
        if (!user) return false;
        try {
          const data = await usersAPI.updateProfile(user.id, updates);
          set({ user: data.user });
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      },

      fetchProfile: async () => {
        try {
          const data = await authAPI.getMe();
          set({ user: data.user, isLoggedIn: true });
        } catch (error) {
          console.error('Error fetching profile:', error);
          get().logout();
        }
      },
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ user: state.user, isLoggedIn: state.isLoggedIn, token: state.token }),
    }
  )
);