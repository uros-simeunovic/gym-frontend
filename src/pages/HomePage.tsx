import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import landingPageImage from "../assets/landingPage.jpg";

const HomePage = () => {
  return (
    <div className="p-2">
      <div className="flex flex-col items-center text-center my-8">
        <h5 className="font-normal text-sm">ACHIEVE YOUR FITNESS GOALS</h5>
        <h1 className="font-bold text-[86px] md:max-w-[600px] md:text-[126px] leading-none">
          FIND YOUR STRENGTH
        </h1>
      </div>

      <div className="w-full h-[100vh] rounded-3xl">
        <img
          src={landingPageImage}
          alt="Landing page image"
          className="object-cover"
        />
      </div>
      <Link to="/trainings/trening1">
        <Button>Trainings</Button>
      </Link>
    </div>
  );
};

export default HomePage;
