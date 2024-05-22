import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="http://localhost:8080/oauth2/authorization/google">
        Login with Google
      </Link>
    </div>
  );
};
