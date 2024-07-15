import { updateUser } from "@/queries/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["users"],
    mutationFn: async (data: { id: string; planId: string }) =>
      await updateUser(data),
    onSuccess: () => {
      toast.success("Korisnik je uspesno azuriran.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return mutation;
};
