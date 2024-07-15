import { getExercisesByPlanId } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetExercisesByPlanId = () => {
  const params = useParams();
  const { planId } = params;
  console.log(planId);
  const query = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => await getExercisesByPlanId(planId),
  });

  return query;
};
