import { createTraining } from "@/queries/trainings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTrainings = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTraining,
    onSuccess: () => {
      queryClient.invalidateQueries();
      console.log("Invalidated");
    },
    onError: () => {
      console.log({ message: "Mutation error..." });
    },
  });

  return mutation;
};
