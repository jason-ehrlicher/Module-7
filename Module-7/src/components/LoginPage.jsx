import { UserProvider } from "../context/UserContext";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div className="LoginPage">
      <h3>Login</h3>
      <UserProvider>
      <LoginForm />
      </UserProvider>
    </div>
  );
}

export default LoginPage;
