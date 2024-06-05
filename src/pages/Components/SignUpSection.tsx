import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import silhouette from "../../assets/silueta.png";

export const SignUpSection = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-12 my-52">
      {/* TODO: Krug koji se smanji do nestanka a iza njega je pink silueta */}
      <img
        src={silhouette}
        alt="Girl workout silhouette"
        className="w-12 md:w-16"
      />
      <h3 className="text-[40px] leading-[44px] md:text-7xl font-semibold max-w-[800px]">
        FITNESS SHOULD BE ACCESIBLE TO EVERYONE
      </h3>
      <p className="text-xl font-normal max-w-[620px]">
        Whether you’re a seasoned athlete or just starting out, we have a
        variety of equipment and classes to suit your needs. Our cardio
        machines, weight lifting equipment, and functional training areas
        provide a comprehensive workout experience.
      </p>
      <Link to={"/auth/login"}>
        <Button
          variant="outline"
          className="text-lg border-2 w-[200px] rounded-3xl hover:bg-pink-500 hover:text-white border-pink-500"
        >
          Prijavi se
        </Button>
      </Link>
    </div>
  );
};
