import { getTrainings } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";

export const useGetTrainings = () => {
  const query = useQuery({
    queryKey: ["trainings"],
    queryFn: getTrainings,
  });

  return query;
};
