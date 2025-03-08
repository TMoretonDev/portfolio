import {ButtonProps} from "@/types";
import React from "react";

const Button: React.FC<ButtonProps> = ({label, onClick, disabled}) => {

    return (
        <button className={'bg-blue-500 hover:bg-blue-700 rounded-lg p-1'} disabled={disabled} onClick={onClick}>
            <p>{label}</p>
        </button>
    )
}

export default Button;
