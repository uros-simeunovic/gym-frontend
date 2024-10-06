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

  console.log(daysByPlanId);

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
  console.log(exerciseDeleted);
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
}

export const getLowerBody1Exercises = async () => {
  const exercisesQuery = query(
    collection(db, `/exercises/donji_deo_1/exercises/`),
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
