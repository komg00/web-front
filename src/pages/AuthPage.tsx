import AuthButton from "components/auth/AuthButton";
import InputField from "components/auth/InputField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
type Props = {
  authType: string;
};

export default function AuthPage({ authType }: Props) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAuthAction = async () => {
    console.log(`type: ${authType}`);
    if (authType === "signIn") {
      try {
        const response = await axios.post(
          "http://34.237.154.47:8080/api/auth/login",
          {
            username: username,
            password: password,
          }
        );
        console.log("실행");

        if (response.status === 200) {
          setErrorMessage("");
          const { accesstoken } = response.data.data;
          localStorage.setItem("accessToken", accesstoken);

          alert("로그인에 성공했습니다.");
          navigate("/home");
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrorMessage(
            error.response?.data?.message ||
              "로그인에 실패했습니다. 다시 시도해주세요."
          );
        } else {
          setErrorMessage("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
        }
      }
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

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <AuthButton
          text={authType === "signUp" ? "Sign Up" : "Sign In"}
          onClick={handleAuthAction}
        />
      </div>
    </div>
  );
}
