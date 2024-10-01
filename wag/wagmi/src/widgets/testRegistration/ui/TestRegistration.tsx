import React, {useState} from 'react';
import {
    Button,
    ButtonVariants,
    firstCharUpp,
    Input,
    InputVariants,
    regexEmail,
    trimString
} from "../../../shared";
import {useQuery} from '@tanstack/react-query'

import {useAccount} from "wagmi";
import cross from '../../../shared/assets/cross.svg'
import {useNavigate} from "react-router-dom";
import {fetchUsers, IListUser, IUserDTO} from "../../../entities";

export const TestRegistration: React.FC = () => {


    const router = useNavigate()
    const account = useAccount()
    //массив загруженных пользователей
    //введенные данные пользователя
    const [user, setUser] = useState<IUserDTO>({username: '', email: ''})
    //ошибка валидации данных пользователя
    const [errorData, setErrorData] = useState<boolean>(false)
    //отправил ли пользователь данные
    const [haveUser, setHaveUser] = useState<boolean>(false)
    //добавление пользователя в таблицу
    const [userInTable, setUserInTable] = useState<boolean>(false)
    //страница данных с бэкэнда



    const { isLoading, isError, data } = useQuery<IListUser>(
        {queryKey: ['users'],
            queryFn:() => fetchUsers(),
            enabled: haveUser,
        })
    const handlerSaveUser = (e: React.FormEvent):void => {
        e.preventDefault();
        if(user.email.length && regexEmail.test(user.email) && user.username.length){
            setErrorData(false)
            setHaveUser(true);
        }
        else{
            setErrorData(true)
        }
    }

    const handlerAddUser = (e: React.FormEvent): void => {
        e.preventDefault();
        setUserInTable(true);
    }

    return (
        <div className="flex  pl-[64px] pr-[122px] pt-[48px] text-white gap-[138px] relative ">
            <div className="flex flex-col">
                <div className="text-orange font-bold font-bebas text-[36px] leading-[43px]">Beta test registration</div>
                <div className="w-[421px] mt-[14px] font-avenir text-[16px] leading-[19px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </div>
                <form className="flex flex-col gap-[18px] mt-[36px]">
                    {!haveUser ? <>
                    <div className="flex flex-col gap-[8px]">
                        <div className="text-white font-bold font-bebas text-[24px] leading-[28px]">NAME</div>
                        <Input variant={account.status==="connected" ? InputVariants.ACTIVE : InputVariants.DISABLED} placeholder="We will display your email in participation list" value={user.username} onChange={(e) => setUser((prevUser) => ({...prevUser, username: e.target.value}))}/>
                    </div>
                    <div className="flex flex-col gap-[8px]"    >
                        <div className="text-white font-bold font-bebas text-[24px] leading-[28px]">EMAIL</div>
                        <Input variant={account.status==="connected" ? InputVariants.ACTIVE : InputVariants.DISABLED}  placeholder="We will display your email in participation list" value={user.email} onChange={(e) => setUser((prevUser) => ({...prevUser, email: e.target.value}))}/>
                    </div>
                    {errorData && <div className="text-red-500 font-bold font-bebas text-[24px] leading-[28px]">The data is incorrect</div>}
                    <div className="mt-[6px]">
                        <Button variant={account.status==='connected'? ButtonVariants.ACTIVE : ButtonVariants.DISABLED} type="submit" onClick={(e) => handlerSaveUser(e)}>GET EARLY ACCESS</Button>
                    </div>
                    {account.status!=='connected'&&<div className="font-bold font-bebas text-[14px] leading-[16px] -mt-[6px]">You need to connect wallet before registration</div>}
                        </>
                    :
                        <>
                            <div className="flex flex-col gap-[8px]">
                                <div className="text-white font-bold font-bebas text-[24px] leading-[28px]">NAME</div>
                                <p className="text-orange font-bold font-bebas text-[32px] leading-[38px]">{user.username}</p>
                            </div>
                            <div className="flex flex-col gap-[8px]"    >
                                <div className="text-white font-bold font-bebas text-[24px] leading-[28px]">EMAIL</div>
                                <p className="text-orange font-bold font-bebas text-[32px] leading-[38px]">{user.email}</p>
                            </div>
                            <div className="mt-[6px]">
                                <Button variant={!userInTable ? ButtonVariants.ACTIVE : ButtonVariants.DISABLED} type="submit" onClick={(e) => handlerAddUser(e)}>LIST ME TO THE TABLE</Button>
                            </div>
                        </>}
                </form>
            </div>
            {account.status==='connected' && haveUser && <div className="flex flex-col w-[666px] ">
              <div className="text-white font-bold font-bebas text-[36px] leading-[43px]">Participation listing (enable only for participants)</div>
              <div className="flex flex-col mt-[36px] gap-10 w-full ">
                <table className="border-collapse max-w-[700px]">
                  <thead>
                  <tr className="mb-[16px] max-w-[700px]">
                    <th className="font-bebas font-bold text-[24px] leading-[28px] w-[200px] text-left">Name</th>
                    <th className="font-bebas font-bold text-[24px] leading-[28px] w-[270px]  text-left">Email</th>
                    <th className="font-bebas font-bold text-[24px] leading-[28px] w-[200px]  text-left">Wallet</th>
                  </tr>
                  </thead>
                  <div className={"flex"}>
                    <tbody className="relative z-50 h-[491px] overflow-y-scroll scroll-smooth pr-[27px]">
                    {userInTable && (
                        <tr className="border-y border-white font-avenir text-[14px] h-[49px] text-orange">
                            <td className="min-w-[200px]">{firstCharUpp(user.username)}</td>
                            <td className="min-w-[200px]">{user.email}</td>
                            <td className="min-w-[200px] pl-[40px]"><span className="flex justify-between items-center"><p>{trimString(account.address, 24)}</p> <div className='cursor-pointer' onClick={() => setUserInTable(false)}><img src={cross}/></div></span></td>
                        </tr>
                    )}

                    {data?.items && data.items.map(userFetch => (
                        <tr key={userFetch.id} onClick={()=> {
                            router(`/user/${userFetch.id}`)
                            window.scrollTo(0, 0)} }
                            className="border-y border-white max-w-[700px] font-avenir text-[14px] h-[49px] cursor-pointer hover:text-orange duration-200">
                            <td className="min-w-[200px]">{userFetch.username}</td>
                            <td className="min-w-[200px]">{userFetch.email}</td>
                            <td className="min-w-[200px] pl-[40px] pr-10">{trimString(userFetch.address, 24)}</td>
                        </tr>
                    ))}

                    <tr className="w-[50px] h-[10px] obs "><td></td></tr>
                    {isError && <tr className="font-avenir text-[14px] w-full flex justify-center items-center"><td>Error</td></tr>}
                    {isLoading && <tr className="font-avenir text-[14px] w-full flex justify-center items-center"><td>Loading...</td></tr>}
                    </tbody>
                      {userInTable && <tr className="-ml-[1.2px] w-[0.5px] mr-[50px] bg-white h-[490px]"></tr>}
                  </div>
                </table>
              </div>
            </div>}


        </div>
    );
};

export default TestRegistration;

