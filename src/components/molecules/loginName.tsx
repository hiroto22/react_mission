import { Input } from "../atoms/input"
import { Item } from "../atoms/item"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}


export const LoginName = (props:Props) => {
    return(
        <div>
            <Item item="名前" />
            <Input value="" type="text" placeholder="鈴木一郎" onChange={props.onChange}/>
        </div>
    )
}