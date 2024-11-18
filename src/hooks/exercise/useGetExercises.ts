import { getExercisesByPlanId } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";

export const useGetExercisesByPlanId = () => {
  // const params = useParams();
  // const { planId } = params;
  const planId = "Z7X3T4rAxYU7B9h2qJIu";
  const query = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => await getExercisesByPlanId(planId),
  });

  return query;
};
