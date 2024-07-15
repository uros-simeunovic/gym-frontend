export interface Exercise {
  id: string;
  name: string;
  videoUrl: string;
  exerciseType: string;
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
