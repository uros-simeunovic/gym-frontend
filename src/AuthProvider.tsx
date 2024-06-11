import axios, { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type User = {
  email: string;
  picture: string;
  name: string;
  isAdmin: boolean;
  premium: boolean;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: AxiosError | null;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/me", {
          withCredentials: true,
        });
        console.log(response);
        setUser(response.data._doc);
        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(error);
        }
        console.error(error);
      }
    };

    fetchUser();
  }, [loading]);

  const contextValue = {
    user,
    loading,
    error,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
