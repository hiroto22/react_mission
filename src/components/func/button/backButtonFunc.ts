import { useRecoilState, useRecoilValue } from "recoil";
import { OffsetNumState } from "../../../state/offsetNumState";




export const BackButtonFunc = () =>{
    const offsetNum= useRecoilValue(OffsetNumState)
    const [number,setOffsetNum] = useRecoilState(OffsetNumState)
    setOffsetNum(offsetNum-10)
}