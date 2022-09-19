import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { exportAsImage } from '../functions/exportAsImage'
import { IContext, TextContext } from '../hooks/contextHook'

const Wrapper = styled.div<{backgroundColor:string,color:string}>`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:100%;
& div {
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "blue"};
color:${props => props.color ? props.color : "black"};
    width:70%;
    min-height:500px
}
`
const TextDiv = styled.div`
& div {
  width:100%;
  height:100%;
  padding:12px;
}
`
const Main= styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:20px;
flex-direction:column;
 & button { margin-top:20px;
    width:150px;
    height:40px;
    background-color:black;
    border:1px solid #666666;
    border-radius:6px;
    color:white;
    cursor:pointer;
    
    transition:0.3s all;
    &:hover{
        background-color:black;
        color:white;
    }
  }
`

const Download = () => {
  const {userText,backgroundColor,color,imageName} = React.useContext(TextContext) as IContext
    const exportRef = React.useRef<any>();
  return (
    <div>
      <Main>
        <button onClick={() => exportAsImage(exportRef.current, imageName,backgroundColor,color)}>
Capture Image

</button>
      </Main>
      
      <Wrapper backgroundColor={backgroundColor} color={color}>
        <div>
      <TextDiv ref={exportRef} >
        <div>
          <ReactMarkdown>{userText}</ReactMarkdown>
        </div>

</TextDiv>

        </div>
 
</Wrapper>
    </div>
    
  )
}

export default Download