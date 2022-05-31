import { atom } from "recoil"





export const IsLoginState = atom<boolean>({
    key:"isAuthenticated",
    default:false
})