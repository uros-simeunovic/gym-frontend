import { Modal } from "@/components/modals/Modal";
import { PlanCard } from "./PlanCard";
import { MailCheck } from "lucide-react";

export const PlanSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-32">
      <PlanCard planName="Plan 1" price={19.99} />
      <PlanCard planName="Plan 2" price={29.99} premium={true} />
      <Modal title="Uputstvo za placanje Vam je poslato na email">
        <div className="w-full flex flex-col items-center mt-10">
          <MailCheck size={100} />
        </div>
      </Modal>
    </div>
  );
};
