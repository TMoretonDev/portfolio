import { ButtonProps } from "@/types";
import React from "react";

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      type="button"
      className={
        "transition-all duration-600 cursor-pointer bg-blue-500 hover:bg-blue-700 hover:duration-300 rounded-lg p-2 active:scale-98"
      }
      disabled={disabled}
      onClick={onClick}
    >
      <p className="font-bold">{label}</p>
    </button>
  );
};

export default Button;
