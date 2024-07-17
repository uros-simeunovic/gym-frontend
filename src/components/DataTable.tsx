import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { useGetUsers } from "@/hooks/useGetUsers";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useGetTrainingPlans } from "@/hooks/useGetTrainingPlans";

export const DataTable = () => {
  const { data, isLoading } = useGetUsers();
  const { mutate } = useUpdateUser();

  const { data: plans } = useGetTrainingPlans();

  const changeStatus = async (id: string, planId: string) => {
    mutate({ id, planId });
  };

  return (
    <div className="border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Slika</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Plan 1</TableHead>
            <TableHead>Plan 2</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-lg">
          {!isLoading &&
            data?.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={user.picture} alt="user avatar" />
                  </Avatar>
                </TableCell>
                <TableCell>{user.name}</TableCell>

                {plans?.map((plan, index) => (
                  <TableCell key={index}>
                    {user.paidPlan == plan.id ? (
                      <Check className="w-16" color="green" />
                    ) : (
                      <X className="w-16" color="red" />
                    )}
                  </TableCell>
                ))}

                <TableCell className="space-x-4">
                  {plans?.map((plan) => (
                    <Button
                      key={plan.id}
                      onClick={() => changeStatus(user.uid, plan.id)}
                      className="space-x-2"
                    >
                      <div>{plan.name}</div>
                    </Button>
                  ))}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
