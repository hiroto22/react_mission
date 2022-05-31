import { atom } from "recoil"



export type Auth ={
    isAuthentiated:boolean
}

export const isAuthenticatedState = atom<Auth|boolean>({
    key:"isAuthenticated",
    default:false
})