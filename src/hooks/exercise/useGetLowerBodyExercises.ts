import { getLowerBody1Exercises } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";

export const useGetLowerBody1Exercises = (
  planId: string | undefined | null
) => {
  const query = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => await getLowerBody1Exercises(planId),
  });

  return query;
};
