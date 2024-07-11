import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetExercises } from "@/hooks/exercise/useGetExercises";
import { Play } from "lucide-react";
import { useAuth } from "@/Providers/AuthProvider";
import { Button } from "@/components/ui/button";

const Training = () => {
  const { data, isLoading } = useGetExercises();
  const navigate = useNavigate();
  const params = useParams();

  const { planId } = params;

  const { userDetails } = useAuth();

  return (
    <div className=" flex flex-col gap-4 md:max-w-[1300px] md:mx-auto px-4 my-10">
      {userDetails?.premium ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {!isLoading &&
            data &&
            data.map((exercise, index) => (
              <div
                key={index}
                className="relative cursor-pointer hover:scale-[1.01] transition-all duration-300 overflow-hidden bg-white shadow-xl rounded-xl w-full aspect-video"
                onClick={() =>
                  navigate(`/plans/${planId}/exercise/${exercise.id}`)
                }
              >
                <Play
                  color="black"
                  className="absolute h-10 w-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                {/* <img
                src={exercise.thumbnail}
                className="rounded-2xl"
                alt="workout thumbnail"
              /> */}
                <div className="font-semibold text-xl absolute bottom-0 left-0 p-4">
                  <span className="text-pink-500">{index + 1}.</span>{" "}
                  {exercise.name}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="space-y-10 flex flex-col">
          <h1 className="text-6xl">Opis planova</h1>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            necessitatibus ipsa voluptates nobis hic quibusdam eos molestias
            itaque numquam, atque, expedita officiis repudiandae veniam cumque
            aliquid eius nulla. Aspernatur veniam fuga velit sapiente cum neque
            distinctio aliquid possimus rem obcaecati. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quas necessitatibus ipsa
            voluptates nobis hic quibusdam eos molestias itaque numquam, atque,
            expedita officiis repudiandae veniam cumque aliquid eius nulla.
            Aspernatur veniam fuga velit sapiente cum neque distinctio aliquid
            possimus rem obcaecati.
          </p>
          <Link to={"/auth/login"}>
            <Button
              variant="outline"
              className="text-lg border-2 w-[200px] rounded-2xl hover:bg-pink-500 hover:text-white border-pink-500 transition duration-300"
            >
              Prijavi se
            </Button>
          </Link>
          <video
            src=""
            className="rounded-[30px] w-full bg-white aspect-video"
          />
        </div>
      )}
    </div>
  );
};

export default Training;
