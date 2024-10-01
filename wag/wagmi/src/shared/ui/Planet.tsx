import React from 'react';
import planetImg from "../../../planet.png"

export enum PlanetVariant {
    withDateBlock = "withDateBlock"
}

interface PlanetProps {
    variant?: PlanetVariant
}

//Отображает планету, текст на переднем плане изменяет цвет
export const Planet: React.FC<PlanetProps> = ({variant}) => {
    return (
        <>
            <div className="absolute top-[32px] left-[619px] w-[532px] h-[532px] rounded-full"></div>
            <div
                className="absolute top-[35px] left-[622px] w-[526px] h-[526px] rounded-full lastRing backdrop-blur-[22px]"></div>
            <div
                className="absolute w-[486px] h-[486px] top-[55px] left-[642px] border-[0.5px] border-orange rounded-full circle"></div>
            {variant === PlanetVariant.withDateBlock ?
                <div
                    className="absolute flex justify-center items-center top-[40px] gap-[10px] left-[825px] px-[12px] py-[8px] font-bebas font-bold text-[14px] bg-white text-darkBackground rounded-[15px]">
                    <div className="leading-none">
                        Q1 2022
                    </div>

                    <div className="w-[12px] h-[12px] shadow-cMd  bg-white text-center rounded-full">
                        <div className="inline-block w-[6px] h-[6px] bg-orange mb-[5.5px] rounded-full"></div>
                    </div>
                </div>
                :
                <div className="absolute top-[53px] left-[882px] w-[6px] h-[6px] rounded-full bg-orange"></div>
            }
            <div className="absolute top-[295px] left-[1125px] w-[6px] h-[6px] rounded-full bg-orange"></div>
            <div className="absolute top-[537px] left-[882px] w-[6px] h-[6px] rounded-full bg-orange"></div>
            <div className="absolute top-[75px] left-[662px] w-[446px] h-[446px] rounded-full bg-firstCircle"></div>
            <div
                className="absolute top-[113px] left-[700px] w-[370px] h-[370px] rounded-full border-[1px] border-borderRings"></div>
            <div
                className="absolute top-[106px] left-[693px] w-[384px] h-[384px] rounded-full border-[1px] border-borderRings"></div>

            <img src={planetImg} className="absolute top-[137px] left-[725px] w-[320px]"/>

            <div
                className="absolute top-[137px] left-[725px] w-[320px] h-[322px] rounded-full bg-red-700 opacity-30 mix-blend-plus-lighter "></div>
            <div
                className="absolute top-[137px] left-[725px] w-[320px] h-[322px] rounded-full bg-invOrange mix-blend-difference border-2 border-invOrange"></div>

            <div
                className="absolute z-50 top-[137px] left-[725px] w-[320px] h-[322px] rounded-full bg-invOrange mix-blend-difference opacity-100 border-2 border-invOrange"></div>
        </>
    );
};


export default Planet;