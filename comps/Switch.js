import styled from 'styled-components';

const BtnCont=styled.button`
width:15rem;
font-size:.8rem;
padding:.75rem;
border-radius:.75rem;
background-color:${(props)=>props.switchBgc};
border: 0px;
margin-bottom:1rem;
&:hover {
    background-color: lightgrey;
  };
  &:hover {
    color: white;
  };
  &:focus{
    background-color: #9a9392;
  }
  &:focus{
    color: #f3f6f4;
  }

`

const Switch=({
    text="Coffee Mode",
    onClick=()=>{}},
    bgc="red"
    
    )=>{
    return <BtnCont onClick={onClick} switchBgc={bgc}>
    {text}
</BtnCont>
}

export default Switch;