import { create } from 'zustand';

export const useCartStore = create((set) => {
  // Load cart from localStorage on initialization
  const savedCart = localStorage.getItem('cart');
  const initialCart = savedCart ? JSON.parse(savedCart) : [];

  return {
    items: initialCart,

    addToCart: (product, quantity) =>
      set((state) => {
        const existingItem = state.items.find((item) => item.id === product._id);

        let newItems;
        if (existingItem) {
          newItems = state.items.map((item) =>
            item.id === product._id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          newItems = [
            ...state.items,
            {
              id: product._id,
              name: product.name,
              price: product.price,
              image: product.thumbnail,
              quantity,
            },
          ];
        }

        localStorage.setItem('cart', JSON.stringify(newItems));
        return { items: newItems };
      }),

    removeFromCart: (productId) =>
      set((state) => {
        const newItems = state.items.filter((item) => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newItems));
        return { items: newItems };
      }),

    updateQuantity: (productId, quantity) =>
      set((state) => {
        const newItems = state.items.map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        localStorage.setItem('cart', JSON.stringify(newItems));
        return { items: newItems };
      }),

    clearCart: () => {
      localStorage.removeItem('cart');
      set({ items: [] });
    },

    getTotalPrice: () => {
      const state = useCartStore.getState();
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    getTotalQuantity: () => {
      const state = useCartStore.getState();
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
  };
});
