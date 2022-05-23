import { BookList } from "../components/organisms/bookList"



export const TopPage = () => {
    return(
        <div>
            <h1>Top Page</h1>
            <a href="/signup">登録</a>
            <br />
            <a href="/login">ログイン</a>
            <BookList />
        </div>
    )      
}

