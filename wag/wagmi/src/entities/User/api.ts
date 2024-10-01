import {IListUser} from "./models.ts";
import axios from "axios";
import {backendBaseUrl} from "../../shared";

export async function fetchUsers(): Promise<IListUser>{
    const {data} = await axios.get(`${backendBaseUrl}/data?page=1&perPage=50`)
    console.log(data)
    return data
}
