import React from 'react';
import {Button, ButtonVariants, Input, InputVariants} from "../../../shared";

export const TestRegistration: React.FC = () => {
    return (
        <div className="flex flex-col px-[64px] pt-[48px] text-white gap-[45px] relative ">
            <div className="text-orange font-bold font-bebas text-[36px] leading-[43px]">Beta test registration</div>
            <div className="w-[421px] font-avenir text-[16px] leading-[19px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>
            <form className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[8px]">
                    <div className="text-white font-bold font-bebas text-[24px] leading-[28px]">NAME</div>
                    <Input variant={InputVariants.ACTIVE}/>
                </div>
                <div className="flex flex-col gap-[8px]"    >
                    <div className="text-white font-bold font-bebas text-[24px] leading-[28px]">EMAIL</div>
                    <Input variant={InputVariants.ACTIVE}/>
                </div>
                <div className="mt-[6px]">
                    <Button variant={ButtonVariants.ACTIVE} type="submit" onClick={(e) => e.preventDefault()}>GET EARLY ACCESS</Button>
                </div>
                <div className="font-bold font-bebas text-[14px] leading-[16px] -mt-[6px]">You need to connect wallet before registration</div>
            </form>


        </div>
    );
};

export default TestRegistration;