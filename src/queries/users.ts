import { UserDetails } from "@/Providers/AuthProvider";
import { db } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";

export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  let allUsers: UserDetails[] = [];
  querySnapshot.forEach((user) => {
    allUsers.push(user.data() as UserDetails);
  });

  return allUsers;
};

export const updateUser = async (data: { id: string; planId: string }) => {
  const batch = writeBatch(db);

  const userRef = doc(db, "users", data.id);
  batch.update(userRef, {
    paidPlan: data.planId,
    updatedAt: serverTimestamp(),
  });
  await batch.commit();
};
