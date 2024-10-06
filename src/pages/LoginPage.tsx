import { Navigate } from "react-router-dom";
import logo from "../assets/logoGG1.png";
import googleIcon from "../assets/google.png";
import { useAuth } from "@/Providers/AuthProvider";

export const LoginPage = () => {
  const { currentUser, signInWithGoogle } = useAuth();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="border-2 m-10 w-full h-[300px] md:w-[500px] md:h-[400px] rounded-3xl flex flex-col gap-20 items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-6 mt-8">
          <h1 className="text-2xl md:text-4xl">Ulogujte se na</h1>
          <img src={logo} alt="logo" className="w-20 md:w-28" />
        </div>
        <div
          onClick={signInWithGoogle}
          className="text-white bg-[#171717] flex flex-row items-center justify-center gap-2 md:gap-4 border rounded-2xl w-[180px] md:w-[230px] text-center py-2 hover:bg-[#171717]/80 transition-all duration-200 ease-in cursor-pointer"
        >
          <img
            src={googleIcon}
            alt="google-icon"
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <h1 className="text-md md:text-xl font-light pb-1">
            Login with Google
          </h1>
        </div>
      </div>
    </div>
  );
};
