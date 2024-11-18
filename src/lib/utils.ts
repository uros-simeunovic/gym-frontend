import { Exercise, ExercisesByType } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export const compareLinksAndPathname = (pathname: string, to: string) => {
  if (to === "/") {
    return false;
  }
  return pathname.includes(to.split("/")[to.split("/").length - 1])
    ? true
    : false;
};

export const groupExercisesByType = (exercises: Exercise[]) => {
  return exercises.reduce((acc: ExercisesByType, exercise: Exercise) => {
    const { exerciseType } = exercise;
    if (!acc[exerciseType]) {
      acc[exerciseType] = [];
    }
    acc[exerciseType].push(exercise);
    return acc;
  }, {});
};

export const progressValue = (
  progressLength: number | undefined,
  exercisesLength: number | undefined
) => {
  if (progressLength && exercisesLength) {
    const value = (progressLength / exercisesLength) * 100;
    console.log(progressLength, exercisesLength);
    return value;
  }
  console.log(progressLength, exercisesLength);
  return 0;
};
