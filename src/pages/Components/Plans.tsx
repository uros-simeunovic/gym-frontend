import { Button } from "@/components/ui/button";
import pinkPlan1 from "../../assets/pinkGirl.webp";
import whitePlan2 from "../../assets/WhiteGirl1.png";
import { useSendEmail } from "@/hooks/useSendEmail";
import { useAuth } from "@/Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const { sendEmail, disabled } = useSendEmail();
  const { currentUser, userDetails } = useAuth();
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
            {userDetails?.paidPlan == "I1euJf8LyuMbj3GLVoh9" ? (
              <Button
                onClick={() => navigate(`/plans/${userDetails.paidPlan}`)}
                className="bg-white text-[#f96294] text-[30px] font-semibold w-[200px] h-[60px] rounded-[40px]"
              >
                Otvori Plan
              </Button>
            ) : (
              <Button
                onClick={() => onClick(20)}
                className="bg-white text-[#f96294] text-[30px] font-semibold w-[170px] h-[60px] rounded-[40px]"
              >
                Kupi
              </Button>
            )}
          </div>
          <div className="absolute bottom-0 right-0 rounded-br-[40px] overflow-hidden">
            <img src={pinkPlan1} className="w-[170px]" />
          </div>
        </div>
      </div>
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
              {userDetails?.paidPlan == "OSlO6JVoATh8KNg7iF9A" ? (
                <Button
                  onClick={() => navigate(`/plans/${userDetails.paidPlan}`)}
                  className="bg-white text-[#db84ff] text-[30px] font-semibold w-[200px] h-[60px] rounded-[40px]"
                >
                  Otvori Plan
                </Button>
              ) : (
                <Button
                  onClick={() => onClick(20)}
                  className="bg-white text-[#db84ff] text-[30px] font-semibold w-[170px] h-[60px] rounded-[40px]"
                >
                  Kupi
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
