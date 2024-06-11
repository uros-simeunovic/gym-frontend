import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Check, Edit, X } from "lucide-react";
import { Button } from "./ui/button";
import { useGetUsers } from "@/hooks/useGetUsers";

export const DataTable = () => {
  const { data, isLoading } = useGetUsers();
  return (
    <div className="border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Slika</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Placeno</TableHead>
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
                <TableCell className="flex items-center justify-start">
                  {user.premium ? (
                    <Check className="w-16" color="green" />
                  ) : (
                    <X className="w-16" color="red" />
                  )}
                </TableCell>
                <TableCell>
                  <Button className="space-x-2">
                    <Edit className="w-4" />
                    <div>Edit</div>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
