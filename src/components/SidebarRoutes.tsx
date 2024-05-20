import { routes } from "@/data/trainings";
import { useSidebarMobile } from "@/hooks/useSidebarMobile";
import { Link } from "react-router-dom";

export const SidebarRoutes = () => {
  const { onClose } = useSidebarMobile();

  return (
    <div className="flex flex-col w-full gap-6">
      {routes.map((route, index) => (
        <div key={index} className="flex flex-col items-start">
          <Link to={`/trainings/${route.href}`} onClick={onClose}>
            <h1 className="text-4xl font-semibold">{route.label}</h1>
          </Link>
          {route.workouts.map((workout, index) => (
            <Link
              key={index}
              to={`/trainings/${route.href}/workout/${workout.href}`}
              onClick={onClose}
            >
              <h1 className="text-xl cursor-pointer transition duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-pink-500 before:transition-all before:duration-300 before:hover:w-full">
                {workout.title}
              </h1>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
