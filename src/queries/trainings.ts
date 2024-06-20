import { db } from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";

export const getTrainingPlans = async () => {
  const plansSnapshot = await getDocs(collection(db, "trainingPlans"));
  const plansList = plansSnapshot.docs.map((doc) => {
    const document = {
      id: doc.id,
      ...doc.data(),
    };
    return document as { id: string; name: string; description: string };
  });
  return plansList;
};

export const getExercises = async (planId: string | undefined) => {
  const exercisesQuery = query(
    collection(db, `trainingPlans/${planId}/exercises`)
  );

  const exercisesSnapshot = await getDocs(exercisesQuery);
  const exercisesList = exercisesSnapshot.docs.map((doc) => {
    const document = {
      id: doc.id,
      ...doc.data(),
    };
    return document as {
      id: string;
      name: string;
      description: string;
      videoUrl: string;
    };
  });
  return exercisesList;
};
