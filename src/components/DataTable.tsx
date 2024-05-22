import { useState } from "react";
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

let users = [
  {
    name: "user1",
    avatar: "https://github.com/shadcn.png",
    purchased: false,
  },
  {
    name: "user2",
    avatar: "https://github.com/shadcn.png",
    purchased: true,
  },
  {
    name: "user3",
    avatar: "https://github.com/shadcn.png",
    purchased: false,
  },
  {
    name: "user4",
    avatar: "https://github.com/shadcn.png",
    purchased: false,
  },
];

export const DataTable = () => {
  const [korisnici, setKorisnici] = useState(users);

  const checkboxHandle = (id: string) => {
    let k = users.map((user) => {
      if (user.name == id && user.purchased) {
        user.purchased = false;
        return user;
      } else if (user.name == id) {
        user.purchased = true;
        return user;
      }
      return user;
    });
    console.log(k);
    setKorisnici(k);
  };

  return (
    <div className="border mx-32">
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
          {users.map((user) => (
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage src={user.avatar} alt="user avatar" />
                </Avatar>
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell className="flex items-center justify-start">
                {user.purchased ? (
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
