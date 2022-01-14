import StyledComBtn from "../comps/StyledComBtn.js";
import {useTheme } from "../utils/provider";
import styled from "styled-components";
import Switch from "../comps/Switch.js";


const WrapCont =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:20rem;
align-items:center;
border:1px solid grey;
border-radius:1.5rem;
margin:1rem;
padding-bottom:.5rem
`
export default function styledComCard() {
  const {setTheme2}=useTheme()
  
  return (
    <WrapCont>
      <StyledComBtn/>
      <Switch onClick={()=>setTheme2('clown')} text="Clown Mode" />
      <Switch onClick={()=>setTheme2('knight')} text="Knight Mode" />
    </WrapCont>
  )
}
