import { create } from "zustand";
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

import type { IProduct } from "../types/product.type";

interface ProductItem extends IProduct {
  quantity: number;
}

interface IShoppingCartStore {
  total: number;
  products: ProductItem[];
  addItem: (product: IProduct) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
}

export const useShoppingCartStore = create(
  devtools(
    persist<IShoppingCartStore>(
      (set, get) => ({
        total: 0,
        products: [],
        addItem: (product: IProduct) => {
          const { products } = get();
          const existingProductIndex = products.findIndex(
            (p) => p.id === product.id
          );

          let updatedProducts;
          if (existingProductIndex !== -1) {
            updatedProducts = [...products];
            const existingProduct = updatedProducts[existingProductIndex];
            updatedProducts[existingProductIndex] = {
              ...existingProduct,
              quantity: existingProduct.quantity + 1,
            };
          } else {
            updatedProducts = [...products, { ...product, quantity: 1 }];
          }

          const newTotal = updatedProducts.reduce(
            (acc, item) => acc + item.quantity,
            0
          );
          set({ products: updatedProducts, total: newTotal });
        },
        removeItem: (productId: number) => {
          const { products } = get();
          const updatedProducts = products.filter((p) => p.id !== productId);
          const newTotal = updatedProducts.reduce(
            (acc, item) => acc + item.quantity,
            0
          );
          set({ products: updatedProducts, total: newTotal });
        },
        clearCart: () => {
          set({ products: [], total: 0 });
        },
      }),
      {
        name: 'shopping-cart',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);