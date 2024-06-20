import { getTrainingPlans } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";

export const useGetTrainingPlans = () => {
  const query = useQuery({
    queryKey: ["trainingPlans"],
    queryFn: getTrainingPlans,
  });

  return query;
};
