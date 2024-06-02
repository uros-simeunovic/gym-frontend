import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";

export const LoginPage = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
  });

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={() => login()}>Login with Google</Button>
    </div>
  );
};
