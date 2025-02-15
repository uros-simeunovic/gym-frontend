import { getExercisesByPlanId } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";

export const useGetExercisesByPlanId = (
  planId: string | undefined | null
) => {
  const query = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => await getExercisesByPlanId(planId),
  });

  return query;
};
