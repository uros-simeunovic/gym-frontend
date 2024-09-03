import { DocumentReference } from "firebase/firestore";

export interface Exercise {
  id: string;
  name: string;
  videoUrl: string;
  thumbnail: string;
  exerciseType: number;
}

export interface Day {
  id: string;
  order: number;
  plan: DocumentReference;
  group: string;
}

export interface ExercisesByType {
  [key: string]: Exercise[];
}

export type Links =
  | "/"
  | "/plans"
  | "/admin/dashboard/users"
  | "/admin/dashboard/plans"
  | "/aboutme"
  | "/admin";
