import React from "react"
import styled from "styled-components"

type Props = {
    placeholder:string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type:string,
    value:string
}



export const InputText= (props:Props) => {
    return(
       <SInput defaultValue={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></SInput>
    )
}


const SInput = styled.textarea`
      height: 200px;
      width: 400px;
`