import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import silhouette from "../../assets/silueta.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const SignUpSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  return (
    <div className="flex flex-col items-center text-center space-y-12 my-52">
      <div className="overflow-hidden">
        <img
          ref={ref}
          src={silhouette}
          alt="Girl workout silhouette"
          className={cn(
            "w-12 md:w-16 transition duration-700",
            isInView ? "translate-y-0" : "translate-y-[118px]"
          )}
        />
      </div>
      <div className="flex flex-col items-center text-center space-y-12">
        <div>
          <div className="overflow-hidden">
            <motion.h3
              className={cn(
                "text-[40px] leading-[44px] md:text-7xl font-semibold max-w-[800px] transition-all duration-700",
                isInView ? "translate-y-0" : "translate-y-16"
              )}
            >
              FITNESS SHOULD BE
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h3
              className={cn(
                "text-[40px] leading-[44px] md:text-7xl font-semibold max-w-[800px] transition-all duration-700",
                isInView ? "translate-y-0" : "translate-y-32"
              )}
            >
              ACCESIBLE TO EVERYONE
            </motion.h3>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className={`text-xl font-normal max-w-[620px] transition duration-700 ${
              isInView ? "translate-x-0" : "translate-x-[620px]"
            } `}
          >
            Whether you’re a seasoned athlete or just starting out, we have a
          </div>
          <div
            className={`text-xl font-normal max-w-[620px] transition duration-700 delay-100 ${
              isInView ? "translate-x-0" : "translate-x-[620px]"
            } `}
          >
            variety of equipment and classes to suit your needs. Our cardio
          </div>
          <div
            className={`text-xl font-normal max-w-[620px] transition duration-700 delay-200 ${
              isInView ? "translate-x-0" : "translate-x-[620px]"
            } `}
          >
            machines, weight lifting equipment, and functional training areas
          </div>
          <div
            className={`text-xl font-normal max-w-[620px] transition duration-700 delay-300 ${
              isInView ? "translate-x-0" : "translate-x-[620px]"
            } `}
          >
            provide a comprehensive workout experience.
          </div>
        </div>
      </div>

      <Link to={"/auth/login"}>
        <Button
          variant="outline"
          className={cn(
            "text-lg border-2 w-[200px] rounded-3xl hover:bg-pink-500 hover:text-white border-pink-500 transition duration-700",
            isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
        >
          Prijavi se
        </Button>
      </Link>
    </div>
  );
};
