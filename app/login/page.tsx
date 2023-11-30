import { getCurrentUser } from "../actions/getCurrentUser";
import LoginClient from "../components/auth/LoginClient";

const Login = async () => {
  const currentUser = await getCurrentUser();
  console.log("🚀 ~ file: page.tsx:6 ~ Login ~ currentUser:", currentUser);
  return (
    <div>
      <LoginClient currentUser={currentUser} />
    </div>
  );
};

export default Login;


