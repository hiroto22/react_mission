import { Input } from "../atoms/input"
import { Item } from "../atoms/item"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value:any
}


export const InputUrl = (props:Props) => {
    return(
        <div>
            <Item item="URL" />
            <Input value={props.value} type="url" placeholder="url" onChange={props.onChange} />
        </div>
    )
}