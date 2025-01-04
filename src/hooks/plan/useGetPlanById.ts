import { getPlanById } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetPlanById = () => {
  const params = useParams();
  const { planId } = params;
  const query = useQuery({
    queryKey: ["plan"],
    queryFn: async () => await getPlanById(planId),
  });

  return query;
};
