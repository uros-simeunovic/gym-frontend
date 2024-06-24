import { getExercises } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetExercises = () => {
  const params = useParams();
  const { planId } = params;
  console.log(planId);
  const query = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => await getExercises(planId),
  });

  return query;
};
