import { atom } from "recoil"



export type BookList ={
    id:string,
    title:string,
    url:string,
    detail:string,
    review:string,
    reviewer:string
}

export const bookListState = atom<BookList[]>({
    key:"bookList",
    default:[]
})