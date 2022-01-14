import styled from'styled-components'
import SassCard from "./SassCard"
import StyledComCard from "./StyledComCard"

const WrapCont =styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
export default function home() {
  return (
    <WrapCont >
      <SassCard/>
      <StyledComCard/>
    </WrapCont>
  )
}