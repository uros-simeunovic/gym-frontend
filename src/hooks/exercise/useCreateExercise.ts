import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useHandleUpload } from "../useHandleUpload";

export const useCreateExercise = () => {
  const queryClient = useQueryClient();
  const { handleUpload } = useHandleUpload();

  const mutation = useMutation({
    mutationKey: ["exercises"],
    mutationFn: async () => await handleUpload(),
    onSuccess: () => {
      toast.success("Vezba je uspesno kreirana.");
      queryClient.invalidateQueries({ queryKey: ["exercises"] });
    },
  });

  return mutation;
};
