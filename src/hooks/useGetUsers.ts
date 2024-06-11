import { getUsers } from "@/queries/users";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return query;
};
