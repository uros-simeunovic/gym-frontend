import { Skeleton } from "../ui/skeleton";

const ExercisesSkeleton = () => {
  const exercises = [
    {
      name: "Ime 1",
    },
    {
      name: "Ime 2",
    },
    {
      name: "Ime 3",
    },
  ];

  return (
    <div>
      {exercises.map((_tip, index) => (
        <li className="flex items-center gap-2 cursor-pointer" key={index}>
          <Skeleton />
        </li>
      ))}
    </div>
  );
};

export default ExercisesSkeleton;
