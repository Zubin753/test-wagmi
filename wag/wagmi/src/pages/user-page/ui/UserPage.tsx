import React from 'react';
import {Header, PersonalData} from "../../../widgets/header";
import {Planet} from "../../../shared";

export const UserPage: React.FC = () => {

    return (
        <div className="flex flex-col w-[1440px] h-[700px] bg-darkBackground self-center relative overflow-hidden">
            <Header/>
            <div className="mt-[96px]">
                <div className="relative -top-[96px] ml-[491px]">
                    <Planet/>
                </div>
                <PersonalData/>
            </div>
        </div>
    );
};

// ml-[500px] relative -mt-[460px]
export default UserPage;