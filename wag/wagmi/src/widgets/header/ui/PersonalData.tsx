import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from '@tanstack/react-query'
import axios from "axios";
import {IUser} from "../../../entities";
import {backendBaseUrl} from "../../../shared";



export const PersonalData: React.FC = ()=> {
    const params = useParams<{id: string}>();
    const fetchUser = async () :Promise<IUser>  => {
        const { data } = await axios.get(`${backendBaseUrl}/data/id/${params.id}`);
        return data;
    };

    const { isLoading, isError, data , error } = useQuery({queryKey: ['user', params.id],queryFn: fetchUser});


    if (isError) {
        return <div className="text-red-500">Ошибка: {error.message}</div>;
    }

    return (
        <div className="flex px-[64px]">
            <div className="flex flex-col justify-between gap-[48px]">
                <h1 className="font-bebas font-bold text-[48px] leading-[57px] text-white">PERSONAL DATA</h1>
                {isLoading ? <div className="font-bebas font-bold text-[48px] leading-[57px] text-white">Loading...</div> :
                <div className="flex flex-col gap-[22px]">
                    <div className="flex flex-col gap-[8px]">
                        <div className="text-white font-bold font-bebas text-[24px] leading-[28px]">NAME</div>
                        <p className="text-orange font-bold font-bebas text-[32px] leading-[38px]">{data?.username}</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <div className="text-white font-bold font-bebas text-[24px] leading-[28px]">EMAIL</div>
                        <p className="text-orange font-bold font-bebas text-[32px] leading-[38px]">{data?.email}</p>
                    </div>
                    <div>
                        <div className="text-white font-bold font-bebas text-[24px] leading-[28px]">WALLET</div>
                        <p className="text-orange font-bold font-bebas text-[32px] leading-[38px]">{data?.address}</p>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default PersonalData;