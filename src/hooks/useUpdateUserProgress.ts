import { UserDetails } from "@/Providers/AuthProvider";
import { updateUserProgress } from "@/queries/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateUserProgress = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["users"],
    mutationFn: async (data: {
      user: UserDetails | undefined;
      exerciseId: string;
    }) => await updateUserProgress(data.exerciseId, data.user),
    onSuccess: () => {
      toast.success("Uspesno ste azurirali napredak.");
      queryClient.invalidateQueries();
    },
  });

  return mutation;
};
