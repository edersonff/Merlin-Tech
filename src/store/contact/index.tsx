import { create } from "zustand";

export type ContactStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useContact = create<ContactStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
