import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const PlanSection = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mb-6 mx-6">
        <h3 className="text-4xl md:text-6xl font-semibold">Trening</h3>
        <Link
          to={"/plans"}
          className="relative flex flex-row items-center gap-2 cursor-pointer before:absolute before:rounded-xl before:bottom-2 before:transition-all before:duration-300 before:w-0 before:h-1 hover:before:w-full before:bg-pink-500"
        >
          <h3 className="text-2xl font-light leading-6">Pogledaj sve</h3>
          <div className="flex items-center justify-center w-7 h-7 mt-1 bg-pink-500 rounded-full">
            <ChevronRight />
          </div>
        </Link>
      </div>
      <div className="relative">
        <img
          src={image}
          alt=""
          className="mx-auto object-cover w-full h-[300px] md:h-[800px] hover:zoom-in-50 rounded-[50px] md:rounded-[75px]"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[50px] md:rounded-[75px] bg-black/20" />
      </div>
    </div>
  );
};
