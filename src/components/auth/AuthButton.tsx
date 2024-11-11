import React from "react";

interface AuthButtonProps {
  text: string;
  onClick: () => void;
}

function AuthButton({ text, onClick }: AuthButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-0 lg:mt-2 bg-main2 hover:bg-main1 text-white text-lg lg:text-2xl p-3 lg:p-4"
    >
      {text}
    </button>
  );
}

export default AuthButton;
