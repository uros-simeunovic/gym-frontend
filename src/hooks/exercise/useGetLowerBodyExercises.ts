import { getLowerBody1Exercises } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";

export const useGetLowerBody1Exercises = () => {
  const query = useQuery({
    queryKey: ["exercises-lower-body-1"],
    queryFn: async () => await getLowerBody1Exercises(),
  });

  return query;
};
