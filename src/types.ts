export interface Exercise {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
}

export type Links =
  | "/"
  | "/plans"
  | "/admin/dashboard/users"
  | "/admin/dashboard/plans"
  | "/aboutme"
  | "/admin";
