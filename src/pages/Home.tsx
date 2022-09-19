import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IContext, TextContext } from '../hooks/contextHook'
import StyleComponent from './StyleComponent'

const Wrapper = styled.div`
background-color:black;
margin:auto;
/* height:100vh; */

& h1 {
    padding: 30px 0;
    color:white;
}
& textarea {
    padding:10px;
    border-radius:10px;
    max-width:100%;
}
@media (min-width: 600px) {
display:flex;
justify-content:space-between;
}
`
const TextSection = styled.div`
  
padding:0px 20px;  
`
const Flex = styled.div`
padding-bottom:20px;
width:100%;
    & button {
    margin-top:20px;
    width:150px;
    height:40px;
    background-color:white;
    border:1px solid #666666;
    border-radius:6px;
    color:#666666;
    cursor:pointer;
    transition:0.3s all;
    &:hover{
        background-color:black;
        color:white;
    }
}
display:flex;
justify-content:space-between;
`
const HarmburgerIcon = styled.div`
position:relative;
left:90%;
margin-bottom:20px;
cursor:pointer;
    @media (min-width: 600px) {
display:none
}
    & div {
        width:30px;
        height:3px;
        background-color:white;
        margin:5px 0;
    }

`
const Home = () => {
    const navigate =useNavigate()
    const {userText,changeUserText} = React.useContext(TextContext) as IContext
    const [text,setText] = useState(userText)
   
   
  return (
    <Wrapper>
        <TextSection>
            
           
            <div>
            <h1>onePager</h1>
             <HarmburgerIcon>
                <div></div>
                <div></div>
                <div></div>
            </HarmburgerIcon>
            <textarea 
            placeholder='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            rows={15} 
            cols={65}
            
            />
            
        </div>
        <Flex>
            <div>
                <button onClick={()=>{
            if(text.length > 0 ){
            changeUserText(text)
            navigate('/preview');
        }
        }}>Preview</button> 
            </div>
            <div>
                 <button onClick={()=>{
            if(text.length > 0 ){
            changeUserText(text)
            navigate('/download');
        }
        }}>convert</button>
            </div>
            
            
        </Flex> 
        </TextSection>
        <StyleComponent />
      
    </Wrapper>  
  )
        
}

export default Home