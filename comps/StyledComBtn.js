import styled from 'styled-components';
import {styled_bgcolor,styled_textcolor} from './Theme';
import {useTheme} from '../utils/provider';
const BntCont= styled.div`
background-color: ${props=>props.background};
padding:0.5rem;
max-width:15rem;
max-height:30rem;
border-radius:1rem;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
margin:2rem
`
const HeaderCont= styled.div`
font-size:1.5rem;
color:${props=>props.color};
font-weight:700;
`
const ImgCount=styled.img`
width:10rem;
border-radius: 50%;
margin:1rem;


`
const DisCont= styled.div`
font-size:1rem;
color:${props=>props.color};
justify-content: center;
text-align:center;
margin:1rem;
`

const StyledComBtn=({
    styledbBg=styled_bgcolor
})=>{
    const {theme2}=useTheme();
    return <BntCont background = {styledbBg[theme2]}>
        <ImgCount src="http://placekitten.com/100/100"/>   
    <HeaderCont color={styled_textcolor[theme2]}> StyledComBtn</HeaderCont>
    <DisCont color={styled_textcolor[theme2]}>This component is using the method of styled-components.</DisCont>
</BntCont>
}

export default StyledComBtn;