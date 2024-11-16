import pinkPlan1 from "../../assets/PinkGrl2.png";
import whitePlan2 from "../../assets/WhiteGirl1.png";
import { useSendEmail } from "@/hooks/useSendEmail";
import { useAuth } from "@/Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const { sendEmail, disabled } = useSendEmail();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const onClick = (price: number) => {
    if (disabled) return;
    currentUser ? sendEmail(price) : navigate("/auth/login");
  };

  return (
    <>
      <div className="h-[500px] sm:h-[800px] relative mt-20">
        <div className="relative p-8  bg-gradient-to-r from-[#f96294] to-[#ffcdde] rounded-[40px] mx-auto">
          <div className="max-w-[200px] text-white flex flex-col gap-12">
            <div className="space-y-4">
              <h1 className="text-[50px] font-semibold leading-none">Plan 1</h1>
              <p className="font-normal text-[12px] leading-none max-w-[180px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis vel aperiam cupiditate ratione? Ipsam magnam enim
                Veritatis vel aperiam cupiditate ratione? Ipsam magnam enim
              </p>
            </div>
            <button
              onClick={() => onClick(20)}
              className="bg-white text-[#f96294] text-[30px] font-semibold w-[170px] h-[60px] rounded-[40px]"
            >
              Kupi
            </button>
          </div>
          <div className="absolute bottom-0 right-0 rounded-br-[40px] overflow-hidden">
            <img src={pinkPlan1} className="w-[170px]" />
          </div>
        </div>

        {/* <div className="absolute bottom-0 -right-[30px] z-50">
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
        </div> */}
        {/* <div className="flex flex-col items-center gap-10 absolute top-[100px]">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
          >
            <h1
              style={{ fontFamily: '"Oswald", sans-serif' }}
              className="text-6xl font-bold"
            >
              PLAN 1
            </h1>
          </motion.div>
          <motion.div
            className="bg-[#FF74A1] p-2 w-[220px] rounded-[20px]"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
              delay: 0.3,
            }}
          >
            <div className="max-w-[300px] p-2 text-white">
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
            className="bg-[#FF74A1] w-[170px] h-[50px] rounded-[20px] px-[12px] flex justify-center"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.45, 0, 0.55, 1],
            }}
          >
            {userDetails?.paidPlan ? (
              <div
                onClick={() => navigate(`/plans/${userDetails.paidPlan}`)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <ArrowRightCircle color="white" size={30} />
                <p className="text-white text-[20px]">Otvori plan</p>
              </div>
            ) : (
              <div
                onClick={() => onClick(20)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <ArrowRightCircle color="white" size={30} />
                <p className="text-white text-[24px]">Kupi</p>
              </div>
            )}
          </motion.div>
        </div> */}
      </div>
      {/* ========================== */}
      <div className="h-[560px] sm:h-[900px] relative">
        <div className="relative p-10 bg-gradient-to-r from-[#edc0ff] to-[#db84ff] rounded-[40px] mx-auto">
          <img
            src={whitePlan2}
            className="w-[180px] absolute bottom-0 left-[10px]"
          />
          <div className="max-w-[200px] text-white flex flex-col gap-12 ml-auto">
            <div className="space-y-4">
              <h1 className="text-[50px] f ont-semibold leading-none ml-auto text-right">
                Plan 2
              </h1>
              <p className="font-normal text-[12px] text-right leading-none max-w-[200px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis vel aperiam cupiditate ratione? Ipsam magnam enim
                Veritatis vel aperiam cupiditate ratione? Ipsam magnam enim
              </p>
            </div>
            <div className="ml-auto">
              <button
                onClick={() => onClick(40)}
                className="bg-white text-[#db84ff] text-[30px] font-semibold w-[170px] h-[60px] rounded-[40px]"
              >
                Kupi
              </button>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 z-50">
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
        <div className="flex flex-col items-center justify-center gap-10 absolute top-[150px] left-[150px]">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
            }}
          >
            <h1
              style={{ fontFamily: '"Oswald", sans-serif' }}
              className="text-6xl font-bold"
            >
              PLAN 2
            </h1>
          </motion.div>
          <motion.div
            className="p-2 w-[220px] h-[150px] rounded-[20px] shadow-lg"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.45, 0, 0.55, 1],
              delay: 0.3,
            }}
          >
            <div className="max-w-[300px] p-2">
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
            className="w-[170px] h-[50px] rounded-[20px] px-[12px] flex justify-center bg-white shadow-lg"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.45, 0, 0.55, 1],
            }}
          >
            <div
              onClick={() => onClick(40)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <ArrowRightCircle size={30} />
              <p className="text-[24px]">Kupi</p>
            </div>
          </motion.div>
        </div> */}
      </div>
    </>
  );
};

export default Plans;
