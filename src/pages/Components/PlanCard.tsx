import { Button } from "@/components/ui/button";
import { useSendEmail } from "@/hooks/useSendEmail";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

export const PlanCard = ({
  price,
  planName,
  premium = false,
}: {
  price: number;
  planName: string;
  premium?: boolean;
}) => {
  const { sendEmail, disabled } = useSendEmail();

  const onClick = () => {
    sendEmail(price);
  };

  return (
    <div className="flex flex-col items-center justify-between rounded-3xl bg-foreground w-[400px] h-[500px] p-10">
      <div className="h-full flex flex-col items-center gap-10">
        <h1 className="text-background text-4xl font-medium text-center">
          {planName}
        </h1>
        <div className="text-background flex flex-row items-center justify-center p-1 text-4xl font-semibold bg-pink-500 text-white rounded-md">
          <h2>{price}eur</h2>
        </div>
        <ul className="text-background text-base space-y-3">
          <li className="flex flex-row items-center gap-2">
            <Check className="text-pink-500" />
            <p>Lorem ipsum dolor sit, amet consectetur</p>
          </li>
          <li className="flex flex-row items-center gap-2">
            <Check className="text-pink-500" />
            <p>saepe dolorem ratione dolorum. Reiciendis natus</p>
          </li>
          <li className="flex flex-row items-center gap-2">
            <Check className="text-pink-500" />
            <p>saepe dolorem ratione dolorum. Reiciendis natus</p>
          </li>

          <li
            className={cn(
              "flex flex-row items-center gap-2",
              !premium && "text-muted-foreground"
            )}
          >
            {!premium ? <X /> : <Check className="text-pink-500" />}
            <p>Lorem ipsum dolor sit, amet consectetur</p>
          </li>
        </ul>
      </div>
      <div className="w-[200px]">
        <Button
          disabled={disabled}
          onClick={onClick}
          variant="outline"
          className="w-full text-lg border-2 rounded-2xl bg-foreground text-background hover:bg-pink-500 hover:text-foreground border-pink-500 transition duration-300"
        >
          Kupi
        </Button>
      </div>
    </div>
  );
};
