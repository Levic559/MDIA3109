import { useTheme } from "../utils/provider"
import SassBtn from "../comps/SassBtn"
import Switch from "../comps/Switch"
import styled from "styled-components"
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
export default function SassCard() {
  const {setTheme}=useTheme()
  return (
    <WrapCont>
      <SassBtn/>
      <Switch onClick={()=>setTheme('coffee')} />
      <Switch onClick={()=>setTheme('latte')} text="Latte Mode" />
      {/* <button onClick={()=>setTheme('coffee')}> Coffee Mode</button>
      <button onClick={()=>setTheme('latte')}> Latte Mode</button> */}
    </WrapCont>
  )
}
