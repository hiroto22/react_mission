import React from "react"
import styled from "styled-components"

type Props = {
    onClick:React.MouseEventHandler<HTMLButtonElement>,
    item:string
}

export const RegisterButton = (props:Props) => {
    return(
        <SRegisterButton onClick={props.onClick}>{props.item}</SRegisterButton>
    )
}

const SRegisterButton = styled.button`
      padding:10px ;
      background-color:#6699FF ;
      color:white;
      border: solid;
      border-radius:8px ;
      cursor: pointer;

`