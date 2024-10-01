import React from 'react';


export enum ButtonVariants {
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED"
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: ButtonVariants
}

//Кастомная кнопка
export const Button: React.FC<ButtonProps> = ({children, variant, ...props}) => {

    const buttonClass = `
        bg-orange pt-[10px] pb-[7px] px-[24px] rounded-[30px] font-bebas text-white text-[18px] font-medium leading-[21px]
        hover:opacity-50 transition-all duration-400
        ${variant !== ButtonVariants.ACTIVE ? "opacity-50" : ""}
        ${props.className || ""}
    `.trim();

    return (
        <button {...props} className={buttonClass} disabled={variant === ButtonVariants.DISABLED}>
            {children}
        </button>
    );
};
export default Button;