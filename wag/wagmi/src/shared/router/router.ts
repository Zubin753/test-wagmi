import {MainPage} from "../../pages/main-page";
import {UserPage} from "../../pages/user-page";
import React from "react";

export interface IRoute {
    path: string,
    element: React.ComponentType,
}

export enum RouteNames {
    MAIN = "/main",
    USER_PAGE = "/user/:id"
}

//Маршруты
export const PrivateRoutes: IRoute[] = [
    {path: RouteNames.MAIN, element: MainPage},
    {path: RouteNames.USER_PAGE, element: UserPage}
]

export const PublicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, element: MainPage},
]