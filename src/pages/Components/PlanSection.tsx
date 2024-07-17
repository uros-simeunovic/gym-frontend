import { Modal } from "@/components/modals/Modal";
import { PlanCard } from "./PlanCard";
import { MailCheck } from "lucide-react";
import { useAuth } from "@/Providers/AuthProvider";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useGetTrainingPlans } from "@/hooks/useGetTrainingPlans";

export const PlanSection = () => {
  const { userDetails } = useAuth();
  const { data } = useGetTrainingPlans();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex flex-wrap justify-center gap-32">
        {data?.map((plan, index) => (
          <PlanCard planName={plan.name} price={plan.price} key={index} />
        ))}
      </div>
      {userDetails?.paidPlan && (
        <Button
          onClick={() => navigate(`/plans/${userDetails?.paidPlan}`)}
          className="w-[150px]"
        >
          Otvori plan
        </Button>
      )}
      <Modal title="Uputstvo za placanje Vam je poslato na email">
        <div className="w-full flex flex-col items-center mt-10">
          <MailCheck size={100} />
        </div>
      </Modal>
    </div>
  );
};
