import { create } from "zustand";

interface Exercise {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
  exerciseType: string;
}

interface VideoModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: Exercise | null;
  setData: (data: Exercise) => void;
  title: string | null;
  setTitle: (title: string) => void;
  videoUrl: string | null;
  setVideoUrl: (data: string) => void;
}

export const useVideoModal = create<VideoModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: null,
  setData: (data: Exercise) => set({ data: data }),
  title: null,
  setTitle: (title: string) => set({ title: title }),
  videoUrl: null,
  setVideoUrl: (data: string) => set({ videoUrl: data }),
}));
