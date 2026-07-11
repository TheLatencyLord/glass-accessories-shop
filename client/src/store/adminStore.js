import { create } from 'zustand';

export const useAdminStore = create((set) => {
  return {
    token: localStorage.getItem('adminToken') || null,
    isAuthenticated: !!localStorage.getItem('adminToken'),

    setToken: (token) => {
      localStorage.setItem('adminToken', token);
      set({ token, isAuthenticated: true });
    },

    logout: () => {
      localStorage.removeItem('adminToken');
      set({ token: null, isAuthenticated: false });
    },

    getToken: () => {
      return localStorage.getItem('adminToken');
    },
  };
});
