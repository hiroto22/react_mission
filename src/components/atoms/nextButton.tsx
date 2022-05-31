import styled from "styled-components"

type Props ={
    onClick:React.MouseEventHandler<HTMLButtonElement>
}


export const NextButton = (props:Props) =>{
    return(
        <SNextButton onClick={props.onClick}>次の10件</SNextButton>
    )
}


const SNextButton = styled.button`
      padding:10px ;
      background-color:#E7F2FA ;
      color:black;
      border: none;
      border-radius:8px ;
      cursor: pointer;

`