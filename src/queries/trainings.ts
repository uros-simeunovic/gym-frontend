import { db } from "@/firebase";
import { Exercise } from "@/types";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";

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

export const getExerciseById = async (
  exerciseId: string | undefined,
  planId: string | undefined
) => {
  const exerciseRef = doc(
    db,
    `/trainingPlans/${planId}/exercises/${exerciseId}`
  );

  const docSnap = await getDoc(exerciseRef);

  return docSnap.data() as Exercise;
};

export const deleteExercise = async (data: {
  planId: string | undefined;
  exerciseId: string | undefined;
}) => {
  const { exerciseId, planId } = data;
  const exerciseDeleted = await deleteDoc(
    doc(db, `trainingPlans/${planId}/exercises/${exerciseId}`)
  );
  console.log(exerciseDeleted);
  return exerciseDeleted;
};
