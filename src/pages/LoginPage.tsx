import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      navigate("/");
    },
    flow: "auth-code",
  });

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={() => login()}>Login with Google</Button>
    </div>
  );
};
