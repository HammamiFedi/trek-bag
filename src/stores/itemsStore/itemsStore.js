import { create } from "zustand";
import { INITIAL_ITEMS } from "../../lib/constants";

export const useItemsStore = create((set) => ({
  items: INITIAL_ITEMS,
  removeAllItems: () => set({ items: [] }),
  resetToInitialItems: () => set({ items: INITIAL_ITEMS }),
  markAllAsComplete: () => {
    set((state) => {
      const updatedItems = state.items.map((item) => ({
        ...item,
        packed: true,
      }));
      return { items: updatedItems };
    });
  },
  markAllAsIncomplete: () => {
    set((state) => {
      const updatedItems = state.items.map((item) => ({
        ...item,
        packed: false,
      }));

      return { items: updatedItems };
    });
  },
  deleteItem: (id) => {
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== id);
      return { items: updatedItems };
    });
  },
  addItem: (newItem) => {
    set((state) => {
      return { items: [...state.items, newItem] };
    });
  },
  toggleItem: (id) => {
    set((state) => {
      const updatedItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });

      return { items: updatedItems };
    });
  },
}));
