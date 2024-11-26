import AuthButton from "components/auth/AuthButton";
import InputField from "components/auth/InputField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
type Props = {
  authType: string;
};

export default function AuthPage({ authType }: Props) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAuthAction = async () => {
    console.log(`type: ${authType}`);
    if (authType === "signIn") {
      // 추후 로그인 로직 추가
      navigate("/home");
    } else {
      // 추후 회원가입 로직 추가
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-lightGreen "
      style={{ minHeight: "calc(100vh - 90px)" }}
    >
      <div className="flex flex-col gap-8 w-2/3 h-5/6 bg-white px-8 py-10 lg:px-14 lg:py-16 xl:px-32 xl:py-24">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-12 text-left">
          {authType === "signUp" ? "Sign Up" : "Sign In"}
        </h1>
        {authType === "signUp" && (
          <div className="flex flex-col gap-3 lg:gap-0 xl:gap-x-8 lg:flex-row lg:justify-between xl:justify-normal ">
            <InputField
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></InputField>
            <InputField
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></InputField>
          </div>
        )}
        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></InputField>
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputField>

        <AuthButton
          text={authType === "signUp" ? "Sign Up" : "Sign In"}
          onClick={handleAuthAction}
        />
      </div>
    </div>
  );
}
