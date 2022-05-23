import { MouseEventHandler } from "react"
import styled from "styled-components"


type Props = {
    url:string
}

export const ToAmazonButton = (props:Props) =>{
    return(
       <a href={props.url}> 
        <SButton>Amazon</SButton>
       </a>
    )
}

const SButton = styled.button`
     color:#FFF ;
     background-color:#FF9933;
     border-radius:5px ;
     border: solid;
     cursor: pointer;
`