import React from 'react'
import styled from 'styled-components'

interface IColorTab {
    backgroundColors:string[];
    backgroundColor:string;
    changeStyleValue:(text:string) => void
}

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    gap:20px;
    overflow-x:scroll;
    padding:10px 0;
`
const ColorItem = styled.div<{backgroundColor:string,selected:boolean}>`
    min-width:30px;
    min-height:30px;
    border-radius:50%;
    background-color: ${(props)=>props.backgroundColor};
    cursor:pointer;
    border: ${(props)=>props.selected ? "2px solid black" : 0};
`
const ColorTab = ({backgroundColors,backgroundColor,changeStyleValue}:IColorTab) => {
  return (
    <Wrapper>
        {backgroundColors.map((item,index)=> 
        <ColorItem 
        key={index}
        onClick={()=>changeStyleValue(item)} 
        backgroundColor={item} 
        selected={backgroundColor === item ? true : false} 
        
        />)}
    </Wrapper>
  )
}

export default ColorTab