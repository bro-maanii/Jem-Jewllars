// src/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Helper function to get items from localStorage
const getCartFromLocalStorage = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('CartData');
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  }
  return [];
};

const initialState: CartState = {
  items: getCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      if (state.items.some((item) => item.id === action.payload.id)) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        if (typeof window !== 'undefined') {
          localStorage.setItem('CartData', JSON.stringify(state.items));
        }
        return;
      }
      state.items.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('CartData', JSON.stringify(state.items));
      }
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      if (typeof window !== 'undefined') {
        localStorage.setItem('CartData', JSON.stringify(state.items));
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
