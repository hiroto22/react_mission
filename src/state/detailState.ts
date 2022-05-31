import { atom } from "recoil"



export type Detail ={
    id:string|undefined,
    title:string|undefined,
    url:string|undefined,
    detail:string|undefined,
    review:string|undefined,
}

export const DetailState = atom<Detail|undefined>({
    key:"detailValue",
    default:{
        id:"",
        title:"",
        url:"",
        detail:"",
        review:""
}
})



