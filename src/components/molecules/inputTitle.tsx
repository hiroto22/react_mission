import { Input } from "../atoms/input"
import { Item } from "../atoms/item"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value:any
}


export const InputTitle = (props:Props) => {
    return(
        <div>
            <Item item="title" />
            <Input value={props.value} type="text" placeholder="タイトル" onChange={props.onChange} />
        </div>
    )
}