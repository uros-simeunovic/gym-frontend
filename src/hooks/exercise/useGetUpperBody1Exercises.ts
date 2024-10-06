import { getUpperBody1Exercises } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";

export const useGetUpperBody1Exercises = () => {
  const query = useQuery({
    queryKey: ["exercises-upper-body"],
    queryFn: async () => await getUpperBody1Exercises(),
  });

  return query;
};
