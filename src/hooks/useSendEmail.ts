import { useAuth } from "@/Providers/AuthProvider";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useDialog } from "./useDialog";

export const useSendEmail = () => {
  const { currentUser } = useAuth();
  const [disabled, setDisabled] = useState(false);
  const { onOpen } = useDialog();

  const sendEmail = (price: number) => {
    onOpen();
    toast.success("Uputstvo za placanje poslato na Vas email.");
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
          setDisabled(false);
        },
        (error) => {
          console.log("Sending email failed: ", error);
        }
      );
  };

  return { sendEmail, disabled };
};
