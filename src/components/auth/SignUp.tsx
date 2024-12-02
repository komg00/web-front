import React, { useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "USER",
    team: "",
    profileImage: null as File | null,
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null); // 이미지 미리보기 URL 상태

  const isStep1Valid = formData.email && formData.password;
  const isStep2Valid = formData.username && formData.team;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setProfileImage(file);

    // 이미지 미리보기 설정
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep2Valid) return;

    const data = new FormData();

    // JSON 데이터를 문자열화하여 추가
    data.append(
      "request",
      JSON.stringify({
        username: formData.username,
        password: formData.password,
        email: formData.email,
        role: formData.role,
        team: formData.team,
      })
    );
    if (profileImage) {
      data.append("profileImage", profileImage);
    }

    try {
      const response = await axios.post(
        "http://34.237.154.47:8080/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data);
      alert("회원가입이 성공적으로 완료되었습니다.");
      navigate("/signin");
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      alert("회원가입 실패. 다시 시도하세요.");
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-lightGreen">
      <div className="flex flex-col gap-6 w-2/3 max-w-[900px] h-5/6 bg-white space-y-6 px-8 py-10 lg:px-14 lg:py-16 xl:px-32 xl:py-24">
        {step === 1 && (
          <>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-12 text-left">
              Sign Up
            </h1>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-dark1 text-lg lg:text-2xl mb-2 lg:mb-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="min-w-full appearance-none bg-lightGreen border-b-2 border-light2 p-3 text-lg lg:text-2xl text-dark2 leading-tight focus:outline-green-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-dark1 text-lg lg:text-2xl mb-2 lg:mb-3"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="min-w-full appearance-none bg-lightGreen border-b-2 border-light2 p-3 text-lg lg:text-2xl text-dark2 leading-tight focus:outline-green-700"
              />
            </div>
            <div className="flex justify-end">
              <button
                disabled={!isStep1Valid}
                onClick={() => setStep(2)}
                className={`w-full mt-0 lg:mt-2 bg-main2 text-white text-lg lg:text-2xl p-3 lg:p-4 ${
                  !isStep1Valid
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-main1"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-12 text-left">
              Sign Up
            </h1>
            <div className="mb-4">
              <p className="block text-dark1 text-lg lg:text-2xl mb-2 lg:mb-3">
                Profile Image
              </p>
              {/* 미리보기 이미지 */}
              <div className="w-full flex items-center justify-center my-6 relative">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 xl:w-36 xl:h-36 object-cover rounded-full border border-gray-300"
                  />
                ) : (
                  <img
                    src="https://yaong-baseball.s3.ap-northeast-2.amazonaws.com/profile/default.png"
                    alt="default"
                    className="w-32 h-32 xl:w-36 xl:h-36 object-cover rounded-full border border-gray-300"
                  />
                )}
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
                <label htmlFor="profileImage">
                  <HiOutlinePhotograph
                    className="cursor-pointer size-8 xl:size-9 absolute mt-9 xl:mt-10 -ml-8 xl:-ml-9 bg-white rounded-full border"
                    color="#999"
                  />
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-dark1 text-lg lg:text-2xl mb-2 lg:mb-3"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="min-w-full appearance-none bg-lightGreen border-b-2 border-light2 p-3 text-lg lg:text-2xl text-dark2 leading-tight focus:outline-green-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="team"
                className="block text-dark1 text-lg lg:text-2xl mb-2 lg:mb-3"
              >
                Team
              </label>
              <select
                id="team"
                name="team"
                value={formData.team}
                onChange={handleInputChange}
                className="mt-1 block w-full bg-lightGreen border-b-2 border-light2 p-3 text-lg lg:text-2xl text-dark2 leading-tight focus:outline-green-700 cursor-pointer"
              >
                {[
                  "KIA",
                  "SAMSUNG",
                  "LG",
                  "DOOSAN",
                  "KT",
                  "KIWOOM",
                  "LOTTE",
                  "SSG",
                  "HANWHA",
                  "NC",
                ].map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between space-x-4">
              <button
                onClick={() => setStep(1)}
                className="w-1/2 mt-0 lg:mt-2 bg-gray-200 text-black hover:bg-gray-300 text-lg lg:text-2xl p-3 lg:p-4"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!isStep2Valid}
                className={`w-1/2 mt-0 lg:mt-2 bg-main2 text-white text-lg lg:text-2xl p-3 lg:p-4 ${
                  !isStep2Valid
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-main1"
                }`}
              >
                Sign Up
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
