import { create } from "zustand";

interface Exercise {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
}

interface DialogProps {
  isOpen: boolean;
  isCreate: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: Exercise | null;
  setData: (data: Exercise) => void;
  setCreate: (data: boolean) => void;
  videoFile: FileList | null;
  setVideoFile: (data: FileList | null) => void;
  uploadProgress: number;
  setUploadProgress: (data: number) => void;
  exerciseTitle: string | null;
  setExerciseTitle: (title: string) => void;
  exerciseDescription: string | null;
  setExerciseDescription: (description: string) => void;
  error: {
    message: string | null;
  } | null;
  setError: (message: string) => void;
}

export const useDialog = create<DialogProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: null,
  setData: (data: Exercise) => set({ data: data }),
  isCreate: false,
  setCreate: (data: boolean) => set({ isCreate: data }),
  videoFile: null,
  setVideoFile: (data: FileList | null) => set({ videoFile: data }),
  uploadProgress: 0,
  setUploadProgress: (data: number) => set({ uploadProgress: data }),
  exerciseTitle: null,
  setExerciseTitle: (title: string) => set({ exerciseTitle: title }),
  exerciseDescription: null,
  setExerciseDescription: (description: string) =>
    set({ exerciseDescription: description }),
  error: null,
  setError: (message: string | null) => set({ error: { message: message } }),
}));
