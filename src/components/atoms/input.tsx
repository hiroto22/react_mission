import React from "react"

type Props = {
    placeholder:string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type:string,
    value:string
}



export const Input= (props:Props) => {
    return(
       <input  defaultValue={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
    )
}