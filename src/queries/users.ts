import axios from "axios";

type Users = {
  email: string;
  isAdmin: boolean;
  premium: boolean;
  picture: string;
  name: string;
}[];

export const getUsers = async () => {
  const response = await axios.get("http://localhost:8080/api/users", {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data as Users;
};
