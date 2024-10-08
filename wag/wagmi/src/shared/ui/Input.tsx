import React from 'react';

export enum InputVariants{
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED"
}
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant: InputVariants,
}

//Кастомный инпут
export const Input: React.FC<InputProps> = ({variant, ...props}) => {

    const inputClass = `
        w-[421px] pt-[12px] pr-[120px] pb-[12px] pl-[18px] rounded-[30px] border-[1px] border-white font-avenir bg-inherit text-[14px] text-orange outline-none font-medium leading-[18px] 
        focus:border-orange focus:text-orange focus:opacity-100 transition-all duration-100
        ${variant !== InputVariants.ACTIVE ? "opacity-50" : ""}
        ${props.className || ""}
    `.trim();

    return (
        <input {...props} className={inputClass} disabled={variant === InputVariants.DISABLED}>

        </input>
    );
};

export default Input;