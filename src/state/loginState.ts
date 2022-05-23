import { atom } from "recoil";


export type Login = {
    name:string,
    email:string,
    password:string
}

export const LoginState = atom<Login[]>({
    key:"LoginItem",
    default:[]
})
