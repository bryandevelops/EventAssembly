import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginFrom/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  );
}