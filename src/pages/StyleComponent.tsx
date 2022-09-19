import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ColorTab from '../components/ColorTab'
import MarkdownInstruction from '../components/MarkdownInstruction'
import { backgroundColors, colors } from '../functions/themes'
import { IContext, TextContext } from '../hooks/contextHook'

const Wrapper = styled.div`
    padding:60px 20px;
    background:white;
`
const ColorDiv = styled.div`
    padding:20px;
    background-color:#666666;
    border-radius:6px;
    margin-bottom:30px;

`
const PreviewResult = styled.div<{backgroundColor:string,color:string}>`
    margin:20px auto;
& div {
    padding:10px;
    border-radius:6px;
    background-color:${(props)=>props.backgroundColor};
    color:${(props)=>props.color};
    margin-top:10px;
    }

`
const InfoIcon = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;
    cursor: pointer;
    font-size:12px;
`
const InputDiv = styled.div`
margin-bottom:15px;
    & input{
        width:100%;
        height:40px;
        margin:10px 0;

    }
`
const StyleComponent = () => {

    const {color,changeStyleValue,backgroundColor,imageName} = useContext(TextContext) as IContext

    const [markdownInstruction,setMarkdownInstruction] = useState(false)
  return (
    <Wrapper>
        <InfoIcon onClick={() => setMarkdownInstruction(!markdownInstruction)}>i</InfoIcon>
        <InputDiv>
        <label htmlFor="name">Image Name</label><br />
        <input type="text" value={imageName} onChange={(e)=>changeStyleValue(e.target.value,"imageName")} maxLength={30} placeholder="onepager" />
        </InputDiv>
        <ColorDiv>
            <h2>Select a background</h2>
            <ColorTab 
            backgroundColors={backgroundColors} 
            backgroundColor={backgroundColor} 
            changeStyleValue={(text:string)=>changeStyleValue(text,"backgroundColor")}
            />
        </ColorDiv>
        <ColorDiv>
            <h2>Select a color</h2>
            <ColorTab 
            backgroundColors={colors} 
            backgroundColor={color} 
            changeStyleValue={(text:string)=>changeStyleValue(text,"color")}
            />
        </ColorDiv>

        <PreviewResult backgroundColor={backgroundColor} color={color}>
<h3>Preview style</h3>
<div>
The quick brown fox jumps over the lazy dog
</div>
        </PreviewResult>
       {markdownInstruction && <MarkdownInstruction setMarkdown={setMarkdownInstruction}/>}
    </Wrapper>
  )
}

export default StyleComponent