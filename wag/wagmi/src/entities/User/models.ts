export interface IUser{
    id: string,
    username: string,
    email: string,
    address: string
}

export interface IUserDTO{
    username: string
    email: string,
}

export interface IMetaUser{
    currentPage: number,
    perPage: number,
    totalPages: number
}
export interface IListUser{
    meta: IMetaUser,
    items: IUser[]
}