import { create } from "zustand";

interface Exercise {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
}

interface DialogProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: Exercise | null;
  setData: (data: Exercise) => void;
}

export const useDialog = create<DialogProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: null,
  setData: (data: Exercise) => set({ data: data }),
}));
