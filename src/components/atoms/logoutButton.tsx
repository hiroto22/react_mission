import styled from "styled-components"



type Props ={
    onClick:React.MouseEventHandler<HTMLButtonElement>
}

export const LogoutButton = (props:Props) =>{
    return(
        <SButton onClick={props.onClick}>ログアウト</SButton>
    )
}


const SButton = styled.button`
    margin-left:8px ;
    border-radius:8px ;
    padding:10px ;
      background-color:#E7F2FA ;
      color:black;
      border: none;
      border-radius:8px ;
      cursor: pointer;
`