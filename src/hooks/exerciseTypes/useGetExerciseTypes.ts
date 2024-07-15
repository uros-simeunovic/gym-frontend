import { getExerciseTypes } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";

export const useGetExerciseTypes = () => {
  const query = useQuery({
    queryKey: ["exerciseTypes"],
    queryFn: async () => await getExerciseTypes(),
  });

  return query;
};
