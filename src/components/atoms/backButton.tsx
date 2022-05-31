import styled from "styled-components"


type Props ={
    onClick:React.MouseEventHandler<HTMLButtonElement>
}



export const BackButton = (props:Props) =>{
    return(
        <SBackButton onClick={props.onClick}>前の10件</SBackButton>
    )
}

const SBackButton = styled.button`
      padding:10px ;
      background-color:#E7F2FA ;
      color: black;
      border: none;
      border-radius:8px ;
      cursor: pointer;
`