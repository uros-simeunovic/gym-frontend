import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import silhouette from "../../assets/silueta.png";

export const SignUpSectionBlack = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-12 md:max-w-[1600px] mx-auto">
      <img
        src={silhouette}
        alt="Girl workout silhouette"
        className="w-12 md:w-16"
      />
      <h3 className="text-[40px] leading-[44px] md:text-9xl font-semibold text-white max-w-[800px]">
        YOUR BODY IS YOUR TEMPLE
      </h3>
      <p className="text-xl text-white font-normal max-w-[620px]">
        Whether you’re a seasoned athlete or just starting out, we have a
        variety of equipment and classes to suit your needs. Our cardio
        machines, weight lifting equipment, and functional training areas
        provide a comprehensive workout experience.
      </p>
      <Link to={"/auth/login"}>
        <Button
          variant="outline"
          className="text-lg text-white border-2 w-[200px] rounded-3xl bg-transparent hover:bg-pink-500 hover:text-white border-pink-500"
        >
          Prijavi se
        </Button>
      </Link>
    </div>
  );
};
