import React from "react"

type Props = {
    placeholder:string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}



export const Input= (props:Props) => {
    return(
       <input placeholder={props.placeholder} onChange={props.onChange}></input>
    )
}