import { createTraining } from "@/queries/trainings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateTrainingPlan = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["trainingPlans"],
    mutationFn: async (data: {
      title: string;
      description: string;
      videoUrl: string;
    }) => await createTraining(data),
    onSuccess: () => {
      toast.success("Korisnik je uspesno azuriran.");
      queryClient.invalidateQueries({ queryKey: ["trainingPlans"] });
    },
  });

  return mutation;
};
