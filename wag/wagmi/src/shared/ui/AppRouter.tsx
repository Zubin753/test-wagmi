import {useAccount} from "wagmi";
import {Navigate, Route, Routes} from "react-router-dom";
import {PrivateRoutes} from "../router/router.ts";
import {PublicRoutes} from "../router/router.ts";

const AppRouter = () => {
    const account = useAccount()

    // Маршруты приложения
    return (
        account.status === "connected"
            //Приватные маршруты доступны только при подклчючении кошелька
            ? <Routes>
                {PrivateRoutes.map((p) =>
                    <Route key={p.path} path={p.path} element={<p.element/>}/>
                )}
                <Route path="*" element={<Navigate to={"/main"} replace/>}/>
            </Routes>
            //Публичные маршруты для пользователей, которые не подключили кошелек
            : <Routes>
                {PublicRoutes.map((p) =>
                    <Route key={p.path} path={p.path} element={<p.element/>}/>
                )}
                <Route path="*" element={<Navigate to={"/main"} replace/>}/>
            </Routes>


    );
};

export default AppRouter;