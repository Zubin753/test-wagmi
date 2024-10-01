import React from 'react';
import {Button, ButtonVariants, trimString} from "../../shared";
import {useAccount, useConnect} from "wagmi";
// import {useDisconnect} from "wagmi"

//Компонент реализовывает подключение к кошельку
export const ButtonConnect: React.FC = () => {
    const account = useAccount()
    const {connectors, connect} = useConnect()

    // Предусмотренна возможность отключать подключеннный аккаунт
    // const { disconnect } = useDisconnect()
    const handlerConnect = () => {
        {
            connectors.map((connector) => {
                    connect({connector})
            })
        }
    }

    return (
        <>
            {account.status !== "connected"
                ?
                <div className="text-white">
                    <Button className="font-white "
                            variant={ButtonVariants.ACTIVE}
                            onClick={() => handlerConnect()}>
                        CONNECT METAMASK
                    </Button>
                </div>
                :
                <div className="flex flex-col">
                    <div
                        className="font-bebas font-bold text-orange text-[18px] leading-[21px]">
                        {trimString(String(account.addresses), 19)}
                    </div>
                    {/*<Button className="font-white " variant={ButtonVariants.ACTIVE} onClick={() => disconnect()}>DISCONNECTED</Button>*/}
                </div>
            }
        </>
    );
};

export default ButtonConnect;