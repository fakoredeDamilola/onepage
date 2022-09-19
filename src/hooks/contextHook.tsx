import React,{useState} from "react";

export interface IContext {
    userText: string;
    changeUserText: (text: string) => void;
    backgroundColor:string;
    color:string
    changeStyleValue:(text:string, value:string)=> void;
    imageName:string
}



export const TextContext = React.createContext<IContext | null>({
    userText: "",
    changeUserText: () => {},
    backgroundColor:"",
    color:"",
    changeStyleValue:()=>{},
    imageName:""
});
interface Props {
    children: React.ReactNode;
  }

const TextProvider = ({ children }:{children:React.ReactNode}) => {
const [userText, setUserText] = useState<string>("");
const [styleProps,setStyleProps] = useState({
color:"white",
backgroundColor:"green",
imageName:"onepager"
})

const changeUserText = (text: string) => {
    setUserText(text);
    }

const changeStyleValue = (text:string, value:string) => {
    setStyleProps({...styleProps,[value]:text})
}


const contextValue = {
     userText,
     changeUserText,
     ...styleProps,
     changeStyleValue
    }
return (
    <TextContext.Provider value ={contextValue}>
        {children}
    </TextContext.Provider>
)
}

export default TextProvider