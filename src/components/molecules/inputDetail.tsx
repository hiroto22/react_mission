import { InputText } from "../atoms/inputText"
import { Item } from "../atoms/item"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value:any
}


export const InputDetail = (props:Props) => {
    return(
        <div>
            <Item item="Detail" />
            <InputText value={props.value} type="text" placeholder="詳細" onChange={props.onChange} />
        </div>
    )
}