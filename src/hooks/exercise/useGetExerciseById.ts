import { getExerciseById } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetExerciseById = (exerciseId: string | undefined) => {
  const params = useParams();
  const { planId } = params;
  const query = useQuery({
    queryKey: ["exercise"],
    queryFn: async () => await getExerciseById(exerciseId, planId),
  });

  return query;
};
