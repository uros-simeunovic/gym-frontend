import { ExerciseTest } from "@/queries/trainings";
import { Exercise } from "@/types";
import { create } from "zustand";

interface VideoModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: Exercise | null;
  setData: (data: Exercise) => void;
  title: string | null;
  setTitle: (title: string) => void;
  selectedExercise: ExerciseTest | null;
  setSelectedExercise: (data: ExerciseTest) => void;
}

export const useVideoModal = create<VideoModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: null,
  setData: (data: Exercise) => set({ data: data }),
  title: null,
  setTitle: (title: string) => set({ title: title }),
  selectedExercise: null,
  setSelectedExercise: (data: ExerciseTest) => set({ selectedExercise: data }),
}));
