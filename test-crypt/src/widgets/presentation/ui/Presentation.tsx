import planet from "./planet.png"

export function Presentation() {
    return (
        <div className="flex flex-col px-[64px] pt-[190px] text-white gap-[45px] relative">

            <div className="flex flex-row justify-between">
                <div className="absolute top-[32px] left-[619px] w-[532px] h-[532px] rounded-full"></div>
                <div className="absolute top-[35px] left-[622px] w-[526px] h-[526px] rounded-full lastRing backdrop-blur-[22px]"></div>
                <div className="absolute w-[486px] h-[486px] top-[55px] left-[642px] border-[0.5px] border-orange rounded-full circle"></div>
                <div className="absolute flex justify-center items-center top-[40px] gap-[10px] left-[825px] px-[12px] py-[8px] font-bebas font-bold text-[14px] bg-white text-darkBackground rounded-[15px]">
                    <div className="leading-none">
                        Q1 2022
                    </div>

                    <div className="w-[12px] h-[12px] shadow-cMd  bg-white text-center rounded-full">
                        <div className="inline-block w-[6px] h-[6px] bg-orange mb-[5.5px] rounded-full"></div>
                    </div>



                </div>
                <div className="absolute top-[295px] left-[1125px] w-[6px] h-[6px] rounded-full bg-orange"></div>
                <div className="absolute top-[537px] left-[882px] w-[6px] h-[6px] rounded-full bg-orange"></div>
                <div className="absolute top-[75px] left-[662px] w-[446px] h-[446px] rounded-full bg-firstCircle"></div>
                <div className="absolute top-[113px] left-[700px] w-[370px] h-[370px] rounded-full border-[1px] border-borderRings"></div>
                <div className="absolute top-[106px] left-[693px] w-[384px] h-[384px] rounded-full border-[1px] border-borderRings"></div>


                <img src={planet} className="absolute top-[137px] left-[725px] w-[320px]"/>

                <div className="absolute top-[137px] left-[725px] w-[320px] h-[322px] rounded-full bg-red-700 opacity-30 mix-blend-plus-lighter "></div>
                <div className="absolute top-[137px] left-[725px] w-[320px] h-[322px] rounded-full bg-invOrange mix-blend-difference border-2 border-invOrange"></div>

                <div className="relative font-bebas text-white text-[120px] font-[700] leading-none drop-shadow-none ">
                    <h1>Explore Your own planet</h1>
                    <h1>In <span className="borderText font-[400] text-transparent bg-clip-text ">our New</span> metaverse</h1>
                </div>
                <div className="absolute  top-[137px] left-[725px] w-[320px] h-[322px] rounded-full bg-invOrange mix-blend-difference opacity-100 border-2 border-invOrange"></div>

                <div className="flex flex-col  gap-[20px] items-center w-[199px] h-[291px] mt-[10px] font-bebas text-white  ">
                    <div className="text-[32px] font-[700]  leading-[38px] tracking-[1px]">ROADMAP STATS</div>
                    <div className="flex flex-col items-center w-full justify-center  my-[10px]">
                        <div className="w-full h-[62px]">
                            <div className="flex justify-center text-orange text-[28px] font-[700] leading-[38px] tracking-[1px">
                                12, 345
                            </div>
                            <div className="flex justify-center text-[18px] font-[400] leading-[21px]">Lorem ipsum dolor</div>
                            <div className="w-full border-[0.5px] border-graySeparator "></div>
                        </div>
                        <div className="w-full h-[62px]">
                            <div className="flex justify-center text-orange text-[28px] font-[700] leading-[38px] tracking-[1px] ">12, 345</div>
                            <div className="flex justify-center text-[18px] font-[400] leading-[21px]">Lorem ipsum dolor</div>
                            <div className="w-full border-[0.5px] border-graySeparator"></div>
                        </div>
                        <div className="w-full h-[62px]">
                            <div className="flex justify-center text-orange text-[28px] font-[700] leading-[38px] tracking-[1px] ">12, 345</div>
                            <div className="flex justify-center text-[18px] font-[400] leading-[21px]">Lorem ipsum dolor</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-[421px] mb-[60px] font-avenir text-[16px] leading-[19px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>

        </div>


    );
}