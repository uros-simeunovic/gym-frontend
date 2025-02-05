import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import pinkGirlAskQuestion from "@/assets/PinkGirlAskQuestion.webp";

const AskQuestion = () => {
  return (
    <div className="h-[600px] relative" id="contact-form">
      <div className="absolute -left-[200px] sm:-left-[600px] h-[360px] sm:h-[460px] sm:bottom-[200px] w-[2400px] bg-pink-500 -rotate-[10deg] -z-0" />
      <div className="absolute flex flex-col gap-4 pt-16 px-2 top-[100px]">
        <h2 className="text-white text-2xl sm:text-4xl sm:font-semibold">
          Dodatna pitanja?
        </h2>
        <Input
          placeholder="Ime i Prezime"
          className="rounded-2xl bg-pink-400 text-white placeholder:text-white w-[250px] sm:w-[400px]"
        />
        <Textarea
          placeholder="Poruka..."
          className="rounded-2xl bg-pink-400 text-white placeholder:text-white"
        />
      </div>
      <div className="absolute w-[100px] sm:w-[180px] right-[70px] sm:-bottom-[10px]">
        <img src={pinkGirlAskQuestion} alt="white-girl" />
      </div>
    </div>
  );
};

export default AskQuestion;
