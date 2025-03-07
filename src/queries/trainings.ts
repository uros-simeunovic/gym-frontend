import { db } from "@/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export const getTrainingPlans = async () => {
  const plansSnapshot = await getDocs(collection(db, "plans"));
  const plansList = plansSnapshot.docs.map((doc) => {
    const document = {
      id: doc.id,
      ...doc.data(),
    };
    return document as {
      id: string;
      name: string;
      price: number;
    };
  });
  return plansList;
};

export const deleteExercise = async (data: {
  planId: string | undefined;
  exerciseId: string | undefined;
}) => {
  const { exerciseId, planId } = data;
  const exerciseDeleted = await deleteDoc(
    doc(db, `trainingPlans/${planId}/exercises/${exerciseId}`)
  );
  return exerciseDeleted;
};

export interface ExerciseTest {
  id: string;
  name: string;
  videoUrl: string;
  thumbnail: string;
  order: number;
  exerciseType:
    | "lower1"
    | "lower1.2"
    | "lower2"
    | "lower2.2"
    | "lower3"
    | "lower3.2"
    | "upper1"
    | "upper1.2"
    | "upper2"
  description1: string;
  description2: string;
  description3: string;
  reps: string[];
}

export const getExercisesByPlanId = async (planId: string | undefined | null) => {
  const exercisesQuery = query(
    collection(db, `/plans/${planId}/exercises`),
    orderBy("order", "asc")
  );

  const exercisesSnapshot = await getDocs(exercisesQuery);

  const exercisesList = exercisesSnapshot.docs.map((doc) => {
    const document = {
      id: doc.id,
      ...doc.data(),
    };
    return document as ExerciseTest;
  });

  return exercisesList;
};

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const getPlanById = async (planId: string | undefined) => {
  const planRef = doc(db, `plans/${planId}`);
  const planDoc = await getDoc(planRef);
  return planDoc.data() as Plan;
};

export const getExerciseById = async (exerciseId: string, planId: string) => {
  const exerciseRef = doc(db, `/plans/${planId}/exercises/${exerciseId}`);

  const exerciseDoc = await getDoc(exerciseRef);
  return exerciseDoc.data() as ExerciseTest;
};