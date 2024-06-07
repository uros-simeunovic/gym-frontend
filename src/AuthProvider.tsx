import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: {
    email: string;
    picture: string;
    name: string;
    isAdmin: boolean;
    premium: boolean;
  } | null;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/me", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const contextValue = {
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
