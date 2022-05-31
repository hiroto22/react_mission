import { InputText } from "../atoms/inputText"
import { Item } from "../atoms/item"

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value:any
}


export const InputReview = (props:Props) => {
    return(
        <div>
            <Item item="Review" />
            <InputText value={props.value} type="text" placeholder="url" onChange={props.onChange} />
        </div>
    )
}