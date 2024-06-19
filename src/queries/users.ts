import { UserDetails } from "@/Providers/AuthProvider";
import { db } from "@/firebase";
import axios from "axios";
import { collection, doc, getDocs, writeBatch } from "firebase/firestore";

export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  let allUsers: UserDetails[] = [];
  querySnapshot.forEach((user) => {
    allUsers.push(user.data() as UserDetails);
  });

  return allUsers;
  // const token = localStorage.getItem("access_token");
  // const response = await axios.get("http://localhost:8080/api/users", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // console.log(response);
  // return response.data as User[];
};

export const updateUser = async (data: { id: string; premium: boolean }) => {
  const batch = writeBatch(db);

  const userRef = doc(db, "users", data.id);
  batch.update(userRef, { premium: !data.premium });
  await batch.commit();
  // const token = localStorage.getItem("access_token");
  // const response = await axios.patch(
  //   `http://localhost:8080/api/users/${data.email}`,
  //   {
  //     premium: !data.premium,
  //   },
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  // );
  // console.log(response);
  // return response.data as User;
};
