import {Logo} from "../../../shared";
import {ButtonConnect} from "../../../features";
import React from "react";

export const Header: React.FC = () => {
    return (
            <div className="flex justify-between items-center w-full bg-darkBackground px-[64px]">
                <Logo/>
                <ButtonConnect></ButtonConnect>
            </div>

    );
}