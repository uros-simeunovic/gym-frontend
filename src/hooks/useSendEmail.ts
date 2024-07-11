import { useAuth } from "@/Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const useSendEmail = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  const sendEmail = (price: number) => {
    setDisabled(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          user_name: currentUser?.displayName,
          price: price * 118,
          user_email: currentUser?.email,
        },
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Uputstvo za placanje poslato na Vas email.");
          navigate("/");
        },
        (error) => {
          console.log("Sending email failed: ", error);
        }
      );
  };

  return { sendEmail, disabled };
};
