import {Header} from "../../../widgets/header";
import {Presentation} from "../../../widgets/presentation";
import {TestRegistration} from "../../../widgets/testRegistration";
import React from "react";

export const MainPage: React.FC = () => {

    return (
        <div className="flex flex-col w-[1440px] h-[1497px] bg-darkBackground self-center">
            <Header/>
            <Presentation/>
            <TestRegistration/>
        </div>
    );
}