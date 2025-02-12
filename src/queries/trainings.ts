import { db } from "@/firebase";
import { Day, Exercise } from "@/types";
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
  const plansSnapshot = await getDocs(collection(db, "trainingPlans"));
  const plansList = plansSnapshot.docs.map((doc) => {
    const document = {
      id: doc.id,
      ...doc.data(),
    };
    return document as {
      id: string;
      name: string;
      description: string;
      price: number;
    };
  });
  return plansList;
};

export const getExercisesByPlanId = async (planId: string | undefined) => {
  const exercisesQuery = query(
    collection(db, `trainingPlans/${planId}/exercises`),
    orderBy("order", "asc")
  );

  const exercisesSnapshot = await getDocs(exercisesQuery);
  const exercisesList = exercisesSnapshot.docs.map((doc) => {
    const document = {
      id: doc.id,
      ...doc.data(),
    };
    return document as Exercise;
  });
  return exercisesList;
};

export const getDaysByPlanIdTest = async (planId: string | undefined) => {
  const daysQuery = query(
    collection(db, `days`)
    // orderBy("order", "asc")
  );

  const daysSnapshot = await getDocs(daysQuery);
  const daysList = daysSnapshot.docs.map((doc) => {
    const document: Day = {
      id: doc.id,
      order: doc.data().order,
      plan: doc.data().plan,
      group: doc.data().group,
    };

    return document;
  });

  const daysByPlanId = daysList.filter((day) => {
    if (day.plan.id == planId) return day;
  });

  return daysByPlanId;
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
  return exerciseDeleted;
};

export const getExerciseTypes = async () => {
  const exerciseTypesQuery = query(collection(db, `exerciseTypes`));

  const exerciseTypesSnapshot = await getDocs(exerciseTypesQuery);
  const exerciseTypesList = exerciseTypesSnapshot.docs.map((doc) => {
    const document = {
      id: doc.id,
      ...doc.data(),
    };
    return document as {
      id: string;
      name: string;
      displayName: string;
    };
  });
  return exerciseTypesList;
};

// =====================

export interface ExerciseTest {
  id: string;
  name: string;
  videoUrl: string;
  thumbnail: string;
  order: number;
  exerciseType:
    | "upper1"
    | "lower1"
    | "upper2"
    | "lower2"
    | "lower3"
    | "lower1.2";
  description1: string;
  description2: string;
  description3: string;
  reps: string[];
}

export const getLowerBody1Exercises = async (
  planId: string | undefined | null
) => {
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

export const getLowerBody2Exercises = async () => {
  const exercisesQuery = query(
    collection(db, `/exercises/donji_deo_2/exercises/`),
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

export const getUpperBody1Exercises = async () => {
  const exercisesQuery = query(
    collection(db, `/exercises/gornji_deo_1/exercises/`),
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
