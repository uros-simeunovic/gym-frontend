import { cn } from "@/lib/utils";
import { useParams } from "react-router-dom";

export const Accordion = ({
  openIndex,
  toggle,
  children,
  index,
  title,
  height,
}: {
  children: React.ReactNode;
  index: number;
  title: string;
  height: string;
  openIndex: number | null;
  toggle: (index: number) => void;
}) => {
  const { planId } = useParams();
  
  return (
    <div className="rounded-[30px] bg-[#f96294]">
      <div
        className={cn(
          "w-full text-left font-bold bg-[#f96294] rounded-[30px] relative overflow-hidden transition-all duration-300 ease-in-out h-[100px]",
          openIndex === index
            ? planId == "OSlO6JVoATh8KNg7iF9A"
              ? height
              : "h-[850px]"
            : "h-[100px]"
        )}
      >
        <div
          onClick={() => toggle(index)}
          className="text-white font-bold text-4xl h-[100px] flex items-center pl-8 cursor-pointer relative"
        >
          <div>{title}</div>
          <div className="h-[2px] rounded-2xl absolute bg-white left-5 right-5 -bottom-1" />
        </div>
        <div className="absolute left-8 top-[120px] text-white">{children}</div>
      </div>
    </div>
  );
};
