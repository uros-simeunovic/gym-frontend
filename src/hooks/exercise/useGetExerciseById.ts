import { getExerciseById } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";

export const useGetExerciseById = (
  exerciseId: string,
  planId: string 
) => {
  const query = useQuery({
    queryKey: ["exercise"],
    queryFn: async () => await getExerciseById(exerciseId, planId),
  });

  return query;
};
