import { useAuth } from "@/Providers/AuthProvider";
import { getUserById } from "@/queries/users";
import { useQuery } from "@tanstack/react-query";

export const useGetUserById = () => {
  const { userDetails } = useAuth();
  console.log(userDetails)
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getUserById(userDetails?.uid),
  });

  return query;
};
