import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import pinkGirlAskQuestion from "@/assets/PinkGirlAskQuestion.webp";
import { Button } from "@/components/ui/button";

const AskQuestion = () => {
  const sendMail = () => {
    console.log("Mail has been sent");
  };

  return (
    <div className="h-[600px] relative" id="contact-form">
      <div className="absolute -left-[200px] sm:-left-[600px] h-[360px] sm:h-[460px] sm:bottom-[200px] w-[2400px] bg-pink-500 -rotate-[10deg] -z-0" />
      <div className="absolute flex flex-col gap-4 pt-16 px-2 top-[150px] sm:top-[50px]">
        <h2 className="text-white text-2xl sm:text-4xl sm:font-semibold">
          Dodatna pitanja?
        </h2>
        <Input
          placeholder="E-mail"
          className="rounded-2xl bg-pink-400 text-white placeholder:text-white w-[250px] sm:w-[400px]"
        />
        <Textarea
          placeholder="Poruka..."
          className="rounded-2xl bg-pink-400 text-white placeholder:text-white"
        />
        <Button
          onClick={sendMail}
          className="bg-pink-400 text-white hover:bg-pink-600 text-[18px] font-semibold w-[140px] h-[55px] sm:w-[180px] sm:h-[65px] rounded-[40px]"
        >
          Posalji
        </Button>
      </div>
      <div className="absolute w-[100px] sm:w-[140px] right-[70px] sm:-top-[200px]">
        <img src={pinkGirlAskQuestion} alt="white-girl" />
      </div>
    </div>
  );
};

export default AskQuestion;
