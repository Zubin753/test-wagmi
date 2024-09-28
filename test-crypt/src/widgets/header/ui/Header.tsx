import {Button, ButtonVariants, Logo} from "../../../shared";

export function Header() {
    return (
            <div className="flex justify-between items-center w-full bg-darkBackground px-[64px]">
                <Logo/>
                <Button variant={ButtonVariants.ACTIVE}>CONNECT METAMASK</Button>
            </div>

    );
}