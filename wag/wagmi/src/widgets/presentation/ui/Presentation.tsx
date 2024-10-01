import {Planet} from "../../../shared";
import {PlanetVariant} from "../../../shared/ui/Planet.tsx";

//Компонент отображает "лицевую часть сайта"
export function Presentation() {
    return (
        <div className="flex flex-col px-[64px] pt-[193px] text-white  relative">

            <div className="flex flex-row justify-between">
                <Planet variant={PlanetVariant.withDateBlock}/>

                <div className="relative font-bebas text-white text-[120px] font-[700] leading-none drop-shadow-none ">
                    <h1>Explore Your own planet</h1>
                    <h1>In <span
                        className="borderText font-[400] text-transparent bg-clip-text ">our New</span> metaverse</h1>
                </div>

                <div
                    className="flex flex-col  gap-[35px] items-center w-[199px] h-[291px] mt-[10px] font-bebas text-white  ">
                    <div className="text-[32px] font-[700]  leading-[38px] tracking-[1px]">ROADMAP STATS</div>
                    <div className="flex flex-col items-center w-full justify-center  gap-[8px]">

                        <div className="w-full h-[62px] flex flex-col justify-between">
                            <div
                                className="flex justify-center text-orange text-[28px] font-[700] leading-[38px] tracking-[1px]">
                                12, 345
                            </div>
                            <div className="flex justify-center text-[18px] font-[400] leading-[21px]">Lorem ipsum
                                dolor
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-graySeparator"></div>

                        <div className="w-full h-[62px] flex flex-col justify-between">
                            <div
                                className="flex justify-center text-orange text-[28px] font-[700] leading-[38px] tracking-[1px]">
                                12, 345
                            </div>
                            <div className="flex justify-center text-[18px] font-[400] leading-[21px]">Lorem ipsum
                                dolor
                            </div>
                        </div>

                        <div className="w-full h-[0.5px] bg-graySeparator"></div>

                        <div className="w-full h-[62px] flex flex-col justify-between">
                            <div
                                className="flex justify-center text-orange text-[28px] font-[700] leading-[38px] tracking-[1px]">
                                12, 345
                            </div>
                            <div className="flex justify-center text-[18px] font-[400] leading-[21px]">Lorem ipsum
                                dolor
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[421px] -mt-[20px] font-avenir text-[16px] leading-[19px] mb-[60px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>

        </div>


    );
}