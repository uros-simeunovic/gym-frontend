import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import whiteGrl from "@/assets/WhiteGirl1.png";

const AskQuestion = () => {
  return (
    <div className="h-[500px] relative">
      <div className="absolute -left-[200px] h-[360px] w-[1000px] bg-pink-500 -rotate-[10deg] -z-0" />
      <div className="absolute flex flex-col gap-4 pt-16 px-2">
        <h2 className="text-white text-3xl">Dodatna pitanja?</h2>
        <Input placeholder="Ime i Prezime" />
        <Textarea placeholder="Poruka..." />
      </div>
      <div className="absolute w-[270px] -right-[80px] bottom-0">
        <img src={whiteGrl} alt="white-girl" />
      </div>
    </div>
  );
};

export default AskQuestion;
