import { motion } from "framer-motion";
import pinkPlan1 from "../../assets/PinkGrl2.png";
import whitePlan2 from "../../assets/WhiteGirl1.png";
import { ArrowRightCircle, Check } from "lucide-react";
import { useSendEmail } from "@/hooks/useSendEmail";
import { useAuth } from "@/Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Plans = () => {
  const { sendEmail, disabled } = useSendEmail();
  const { currentUser, userDetails } = useAuth();
  console.log(userDetails);
  const navigate = useNavigate();

  const onClick = (price: number) => {
    if (disabled) return;
    currentUser ? sendEmail(price) : navigate("/auth/login");
  };

  return (
    <>
      <div className="h-[460px] sm:h-[800px] relative">
        {userDetails?.paidPlan && (
          <div className="mt-10 text-center">
            <Button
              onClick={() => navigate(`/plans/${userDetails?.paidPlan}`)}
              className="w-[150px] bg-[#FF74A1]"
            >
              OTVORI PLAN
            </Button>
          </div>
        )}
        <div className="absolute bottom-0 right-0 z-50">
          <motion.img
            key="image"
            src={pinkPlan1}
            alt="Landing page image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="w-[200px] sm:w-[300px]"
          />
        </div>

        <motion.div
          className="bg-[#FF74A1] p-2 w-[250px] h-[150px] sm:w-[360px] sm:h-[200px] md:h-[250px] md:w-[400px] rounded-[20px] absolute right-[100px] sm:right-[140px] md:right-[200px] top-[90px] -z-0 shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <div className="max-w-[300px] text-white">
            <h2 className="font-medium text-[24px] sm:text-[28px] text-center">
              Plan 1
            </h2>
            <ul className="font-light">
              <li className="w-full flex items-center gap-1">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className="w-full flex items-center gap-1">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className="w-full flex items-center gap-1">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className="w-full flex items-center gap-1">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#FF74A1] w-[170px] h-[50px] rounded-[20px] absolute sm:w-[280px] sm:top-[320px] right-[120px] top-[260px] md:top-[360px] md:right-[180px] px-[12px] flex -z-0 shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <div
            onClick={() => onClick(20)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <ArrowRightCircle color="white" size={30} />
            <p className="text-white text-[24px]">Kupi</p>
          </div>
        </motion.div>
      </div>
      {/* ========================== */}
      <div className="h-[560px] sm:h-[900px] relative">
        <div className="absolute bottom-0 z-50">
          <motion.img
            key="image"
            src={whitePlan2}
            alt="Landing page image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="w-[220px] sm:w-[360px]"
          />
        </div>

        <motion.div
          className="bg-white px-6 py-2 w-[260px] h-[150px] sm:w-[320px] sm:h-[240px] rounded-[20px] absolute left-[80px] top-[140px] sm:left-[260px] sm:top-[260px] md:h-[250px] md:w-[400px] -z-0 drop-shadow-xl flex justify-end md:justify-normal"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <div className="">
            <h2 className="font-medium text-[24px] sm:text-[28px] text-center">
              Plan 2
            </h2>
            <ul>
              <li className="w-full flex items-center gap-1">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className="w-full flex items-center gap-1">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className="w-full flex items-center gap-1">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li className="w-full flex items-center gap-1">
                <Check />
                <p>Lorem ipsum dolor sit.</p>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="bg-white w-[170px] h-[50px] rounded-[20px] absolute sm:w-[260px] left-[100px] top-[310px] sm:left-[300px] sm:top-[540px] flex items-center justify-end gap-1 px-[12px] -z-0 shadow-lg hover:w-[200px] sm:hover:w-[270px] transition-all cursor-pointer"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <div
            onClick={() => onClick(40)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <p className="text-[24px] pb-[2px]">Kupi</p>
            <ArrowRightCircle size={30} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Plans;
