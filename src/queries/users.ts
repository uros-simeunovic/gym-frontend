import { UserDetails } from "@/Providers/AuthProvider";
import { db } from "@/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { toast } from "sonner";

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

export const updateUserProgress = async (
  exerciseId: string,
  user: UserDetails | undefined
) => {
  if (!user) {
    toast.error("User doesn't exist");
    return;
  }

  const userRef = doc(db, "users", user.uid);

  if (user.progress.includes(exerciseId)) {
    let progress = user.progress;

    progress = progress.filter((p) => p !== exerciseId);

    await updateDoc(userRef, {
      progress: progress,
    });
    return;
  }

  await updateDoc(userRef, {
    progress: [...user.progress, exerciseId],
  });
};

export const getUserById = async (userId: string | undefined) => {
  const userRef = doc(db, `/users/${userId}`);

  const docSnap = await getDoc(userRef);

  return docSnap.data() as UserDetails;
};
