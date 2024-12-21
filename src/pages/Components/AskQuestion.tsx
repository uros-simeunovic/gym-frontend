import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import whiteGrl from "@/assets/WhiteGirl1.png";

const AskQuestion = () => {
  return (
    <div className="h-[600px] relative">
      <div className="absolute -left-[200px] sm:-left-[400px] h-[360px] w-[2000px] bg-pink-500 -rotate-[10deg] -z-0" />
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
      <div className="absolute w-[270px] sm:w-[350px] -right-[80px] bottom-0">
        <img src={whiteGrl} alt="white-girl" />
      </div>
    </div>
  );
};

export default AskQuestion;
