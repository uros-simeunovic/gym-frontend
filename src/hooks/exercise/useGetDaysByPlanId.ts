import { getDaysByPlanIdTest } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetDaysByPlanIdTest = () => {
  const params = useParams();
  const { planId } = params;
  const query = useQuery({
    queryKey: ["days"],
    queryFn: async () => await getDaysByPlanIdTest(planId),
  });

  return query;
};
