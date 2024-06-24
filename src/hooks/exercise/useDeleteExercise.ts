import { deleteExercise } from "@/queries/trainings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteExercise = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["exercises"],
    mutationFn: async (data: {
      planId: string | undefined;
      exerciseId: string | undefined;
    }) => await deleteExercise(data),
    onSuccess: () => {
      toast.success("Vezba je uspesno izbrisana.");
      queryClient.invalidateQueries({ queryKey: ["exercises"] });
    },
    onError: (error) => {
      toast.error("Greska pri brisanju vezbe.");
      console.log("Greska pri brisanju vezbe: ", error);
    },
  });

  return mutation;
};
