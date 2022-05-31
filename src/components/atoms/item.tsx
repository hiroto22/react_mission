

type Props = {
    item:string
}

export const Item = (props:Props) => {
    return(
        <p>{props.item}</p>
    )
}