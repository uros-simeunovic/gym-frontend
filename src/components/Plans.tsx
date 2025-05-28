import { Button } from "@/components/ui/button";
import plan1Image from "@/assets/Plan1Image.webp";
import whitePlan2 from "@/assets/WhiteGirl1.webp";
import { useAuth } from "@/Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "@/components/modals/Modal";
import { useEffect } from "react";
import { Badge } from "./ui/badge";

export const Plans = () => {
  const { userDetails } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("from", "home");
  }, []);

  return (
    <>
      <div className="px-2 space-y-20 sm:space-y-40">
        <div
          className="flex flex-col text-center justify-center items-center"
          id="plans"
        >
          <h1 className="text-7xl sm:text-8xl font-semibold text-[#f96294]">
            Planovi
          </h1>
        </div>
        <div className="space-y-36 sm:space-y-80 pt-28">
          <div className="relative min-h-[350px] md:min-h-[500px] p-6 bg-gradient-to-r from-[#f96294] to-[#ffcdde] rounded-[40px] mx-auto">
            <div className="mt-4 mb-2 absolute -top-24">
              <div className="flex items-center gap-2">
                <span className="text-lg line-through opacity-70 text-[#f96294]">
                  5200rsd
                </span>
                <Badge className="bg-[#f96294] text-white">-30%</Badge>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-4xl font-bold text-[#f96294]">
                  3600rsd
                </span>
                <Badge className="ml-2 bg-[#f96294] text-white">Akcija</Badge>
              </div>
            </div>
            <div className="absolute z-0 bottom-0 right-0 rounded-br-[40px] overflow-hidden">
              <img
                src={plan1Image}
                alt="plan-1-image"
                className="w-[180px] sm:w-[320px]"
              />
            </div>
            <div className="text-white flex flex-col gap-12">
              <div className="space-y-4">
                <h1 className="text-[40px] sm:text-[50px] font-semibold leading-none">
                  BubbleUp
                </h1>
                <div className="flex flex-col font-normal text-[12px] sm:text-xl leading-[16px] space-y-1 max-w-[60%]">
                  <div className="relative">
                    <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                    <p className="ml-3">Tri treninga nedeljno</p>
                  </div>
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
              <div className="relative">
                {userDetails?.paidPlan == "I1euJf8LyuMbj3GLVoh9" ||
                userDetails?.isAdmin ? (
                  <Button
                    onClick={() => navigate(`/plans/I1euJf8LyuMbj3GLVoh9`)}
                    className="bg-white text-[#f96294] text-[24px] sm:text-[30px] font-semibold w-[170px] sm:w-[200px] h-[50px] sm:h-[60px] rounded-[40px]"
                  >
                    Otvori Plan
                  </Button>
                ) : (
                  <Link
                    to={"https://www.instagram.com/mitrovic_kris/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-[#f96294] text-[30px] font-semibold w-[140px] sm:w-[170px] h-[50px] sm:h-[60px] rounded-[40px]">
                      Kupi
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="relative min-h-[350px] md:min-h-[500px] flex p-6 bg-gradient-to-r from-[#edc0ff] to-[#db84ff] rounded-[40px] mx-auto  sm:overflow-visible">
            <div className="mt-4 mb-2 absolute -top-24 right-6">
              <div className="flex justify-end flex-row items-center gap-2">
                <Badge className="bg-[#db84ff] text-white">-30%</Badge>
                <span className="text-lg line-through opacity-70 text-[#db84ff]">
                  6200rsd
                </span>
              </div>
              <div className="flex flex-row justify-end items-center mt-1">
                <Badge className="bg-[#db84ff] text-white">Akcija</Badge>
                <span className="ml-2 text-4xl font-bold text-[#db84ff]">
                  4300rsd
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 -left-2 overflow-hidden">
              <img
                src={whitePlan2}
                alt="plan-2-image"
                className="w-[180px] sm:w-[300px]"
              />
            </div>
            <div className="ml-[80px] sm:ml-[180px] text-white flex flex-col justify-between gap-12">
              <div className="space-y-4">
                <div>
                  <h1 className="text-[34px] sm:text-[50px] font-semibold leading-none text-left">
                    GluteGoddess
                  </h1>
                </div>
                <div className="font-normal text-[12px] sm:text-xl leading-none">
                  <div className="font-normal text-[12px] sm:text-xl leading-[16px] space-y-1">
                    <div className="relative">
                      <div className="absolute left-0 top-[4px] sm:top-[10px] w-[8px] h-[8px] rounded-full bg-white" />
                      <p className="ml-3">Četiri treninga nedeljno</p>
                    </div>
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
              <div>
                {userDetails?.paidPlan == "OSlO6JVoATh8KNg7iF9A" ||
                userDetails?.isAdmin ? (
                  <Button
                    onClick={() => navigate("/plans/OSlO6JVoATh8KNg7iF9A")}
                    className="bg-white text-[#db84ff] absolute bottom-6 right-6 text-[24px] sm:text-[30px] font-semibold w-[170px] sm:w-[200px] h-[46px] sm:h-[60px] rounded-[40px]"
                  >
                    Otvori Plan
                  </Button>
                ) : (
                  <Link
                    to={"https://www.instagram.com/mitrovic_kris/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-[#db84ff] absolute bottom-6 right-6 text-[30px] font-semibold w-[140px] sm:w-[170px] h-[50px] sm:h-[60px] rounded-[40px]">
                      Kupi
                    </Button>
                  </Link>
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
