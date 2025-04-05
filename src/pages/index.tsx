import { type NextPage } from "next";
import Link from "next/link";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import React from "react";

const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  
  // Force login screen to be visible by default
  React.useEffect(() => {
    if (loginScreenState === "HIDDEN") {
      setLoginScreenState("LOGIN");
    }
  }, [loginScreenState, setLoginScreenState]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="absolute right-4 top-4">
        <button
          className="rounded-2xl border-2 border-b-4 border-gray-200 px-4 py-2 text-sm font-bold uppercase text-blue-400 transition hover:bg-gray-50 hover:brightness-90"
          onClick={() => setLoginScreenState(loginScreenState === "LOGIN" ? "SIGNUP" : "LOGIN")}
        >
          {loginScreenState === "LOGIN" ? "Sign up" : "Login"}
        </button>
      </div>
      <LoginScreen
        loginScreenState={loginScreenState === "HIDDEN" ? "LOGIN" : loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
