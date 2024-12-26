import { Button } from "@/components/ui/button";
import plan1Image from "../../assets/pinkGirl.webp";
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
    <div className="px-2 space-y-40 mt-[200px] sm:mt-[400px]">
      <div
        className="flex flex-col text-center justify-center items-center"
        id="plans"
      >
        <h1 className="text-7xl sm:text-8xl font-semibold text-pink-500">
          Planovi
        </h1>
        <p className="text-sm sm:text-xl text-pink-500">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>
      <div className="space-y-32">
        <div className="relative md:h-[500px] p-4 bg-gradient-to-r from-[#f96294] to-[#ffcdde] rounded-[40px] mx-auto">
          <div className="h-full max-w-[80%] text-white flex flex-col justify-between gap-12">
            <div className="space-y-4">
              <h1 className="text-[50px] font-semibold leading-none">Plan 1</h1>
              <p className="font-normal text-[12px] sm:text-xl leading-none max-w-[200px]">
                Idealno za početnike ili zauzet raspored. Dovoljno za održavanje
                zdravlja, povećanje snage i sagorevanje kalorija. Omogućava
                dovoljno vremena za oporavak između treninga. Manje treninga
                može delovati manje zastrašujuće, što olakšava pridržavanje
                rutini. Fokus na kvalitet, a ne kvantitet treninga.
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
            <img src={plan1Image} className="w-[180px] sm:w-[360px]" />
          </div>
        </div>
        <div className="relative md:h-[500px] flex p-4 bg-gradient-to-r from-[#edc0ff] to-[#db84ff] rounded-[40px] mx-auto">
          <div className="absolute bottom-0 left-[5px] overflow-hidden">
            <img src={whitePlan2} className="w-[170px] sm:w-[280px]" />
          </div>
          <div className="max-w-[250px] sm:max-w-[80%] ml-auto text-white flex flex-col justify-between gap-12">
            <div className="space-y-4">
              <h1 className="text-[50px] font-semibold leading-none ml-20 text-left">
                Plan 2
              </h1>
              <p className="font-normal text-[12px] sm:text-xl text-right leading-none">
                Brži rezultati. Dodatni trening ubrzava napredak u gubitku
                masnoća i povećanju mišića. Više dana omogućava detaljniji rad
                na pojedinačnim mišićnim grupama. Stvaranje snažnijih navika.
                Učestaliji trening postaje deo dnevne rutine, što jača
                disciplinu. Pruža više prostora za raznovrsnost u vežbama.
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
    </div>
  );
};

export default Plans;
