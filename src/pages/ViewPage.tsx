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
height:100vh;
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
}
`

const ViewPage = () => {
  const {userText,backgroundColor,color,imageName} = React.useContext(TextContext) as IContext
    const exportRef = React.useRef<any>();
  return (
    <Wrapper backgroundColor={backgroundColor} color={color}>
        <div>
      <TextDiv ref={exportRef} >
        <div>
          <ReactMarkdown>{userText}</ReactMarkdown>
        </div>

</TextDiv>
<button onClick={() => exportAsImage(exportRef.current,imageName,backgroundColor,color)}>
Capture Image

</button>
        </div>
 
</Wrapper>
  )
}

export default ViewPage