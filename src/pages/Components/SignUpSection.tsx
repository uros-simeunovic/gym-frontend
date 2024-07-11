import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import silhouette from "../../assets/silueta.png";
import { motion } from "framer-motion";
import { useRef } from "react";

export const SignUpSection = () => {
  const ref = useRef(null);

  return (
    <div className="flex flex-col items-center text-center space-y-12 my-52">
      <div className="overflow-hidden">
        <img
          ref={ref}
          src={silhouette}
          alt="Girl workout silhouette"
          className="w-12 md:w-16 transition duration-700"
        />
      </div>
      <div className="flex flex-col items-center text-center space-y-12">
        <div>
          <div className="overflow-hidden">
            <motion.h3 className="text-[58px] leading-[66px] md:text-7xl font-semibold max-w-[800px] transition-all duration-700">
              FITNESS SHOULD BE
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h3 className="text-[58px] leading-[66px] md:text-7xl font-semibold max-w-[800px] transition-all duration-700">
              ACCESIBLE TO EVERYONE
            </motion.h3>
          </div>
        </div>
        <p className="overflow-hidden max-w-[420px] md:max-w-[620px] text-2xl font-light">
          Whether you’re a seasoned athlete or just starting out, we have a
          variety of equipment and classes to suit your needs. Our cardio
          machines, weight lifting equipment, and functional training areas
          provide a comprehensive workout experience.
        </p>
      </div>

      <Link to={"/auth/login"}>
        <Button
          variant="outline"
          className="text-lg border-2 w-[200px] rounded-2xl hover:bg-pink-500 hover:text-white border-pink-500 transition duration-300"
        >
          Prijavi se
        </Button>
      </Link>
    </div>
  );
};
