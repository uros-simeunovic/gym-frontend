import { Button } from "@/components/ui/button";
import plan1Image from "@/assets/Plan1Image.webp";
import whitePlan2 from "@/assets/WhiteGirl1.webp";
import { useAuth } from "@/Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useDialog } from "@/hooks/useDialog";
import { Modal } from "@/components/modals/Modal";

export const Plans = () => {
  const { userDetails } = useAuth();
  const navigate = useNavigate();

  const { onOpen } = useDialog();

  const onClick = () => {
    userDetails ? onOpen() : navigate("/auth/login");
  };

  return (
    <>
      <div className="px-2 space-y-20 sm:space-y-40 mt-[200px] sm:mt-[400px]">
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
        <div className="space-y-20 sm:space-y-80">
          <div className="relative md:h-[500px] p-6 bg-gradient-to-r from-[#f96294] to-[#ffcdde] rounded-[40px] mx-auto">
            <div className="h-full text-white flex flex-col justify-between gap-12">
              <div className="space-y-4">
                <h1 className="text-[40px] font-medium leading-none">
                  3 x nedeljno
                </h1>
                <div className="flex flex-col font-normal text-[12px] sm:text-xl leading-[16px] space-y-1 max-w-[60%]">
                  <div className="relative">
                    <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                    <p className="ml-3">
                      Idealno za početnike ili zauzet raspored.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                    <p className="ml-3">
                      Dovoljno za održavanje zdravlja, povećanje snage i
                      sagorevanje kalorija.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                    <p className="ml-3">
                      Omogućava dovoljno vremena za oporavak između treninga.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                    <p className="ml-3">
                      Manje treninga može delovati manje zastrašujuće, što
                      olakšava pridržavanje rutini.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                    <p className="ml-3">
                      Fokus na kvalitet, a ne kvantitet treninga.
                    </p>
                  </div>
                </div>
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
                  onClick={() => onClick()}
                  className="bg-white text-[#f96294] text-[30px] font-semibold w-[170px] h-[60px] rounded-[40px]"
                >
                  Kupi
                </Button>
              )}
            </div>
            <div className="absolute bottom-0 right-0 rounded-br-[40px] overflow-hidden">
              <img src={plan1Image} className="w-[180px] sm:w-[320px]" />
            </div>
          </div>
          <div className="relative md:h-[500px] flex p-6 bg-gradient-to-r from-[#edc0ff] to-[#db84ff] rounded-[40px] mx-auto">
            <div className="absolute bottom-0 left-[5px] overflow-hidden">
              <img src={whitePlan2} className="w-[180px] sm:w-[300px]" />
            </div>
            <div className="ml-[120px] sm:ml-[180px] text-white flex flex-col justify-between gap-12">
              <div className="space-y-4">
                <h1 className="text-[40px] font-medium leading-none text-left">
                  4 x nedeljno
                </h1>
                <div className="font-normal text-[12px] sm:text-xl leading-none">
                  <div className="font-normal text-[12px] sm:text-xl leading-[16px] space-y-1">
                    <div className="relative">
                      <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                      <p className="ml-3">Brži rezultati.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                      <p className="ml-3">
                        Dodatni trening ubrzava napredak u gubitku masnoća i
                        povećanju mišića.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                      <p className="ml-3">
                        Više dana omogućava detaljniji rad na pojedinačnim
                        mišićnim grupama.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                      <p className="ml-3">Stvaranje snažnijih navika.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                      <p className="ml-3">
                        Učestaliji trening postaje deo dnevne rutine, što jača
                        disciplinu.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                      <p className="ml-3">
                        Pruža više prostora za raznovrsnost u vežbama.
                      </p>
                    </div>
                  </div>
                </div>
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
                    onClick={() => onClick()}
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
      <Modal title="Uputstvo za plaćanje">
        <div className="flex flex-col items-center">
          <div>Ime i prezime:{userDetails?.name}</div>
          <div>Broj racuna: 83489577348058934</div>
        </div>
      </Modal>
    </>
  );
};
