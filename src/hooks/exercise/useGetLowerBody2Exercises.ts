import { getLowerBody2Exercises } from "@/queries/trainings";
import { useQuery } from "@tanstack/react-query";

export const useGetLowerBody2Exercises = () => {
  const query = useQuery({
    queryKey: ["exercises-lower-body-2"],
    queryFn: async () => await getLowerBody2Exercises(),
  });

  return query;
};
