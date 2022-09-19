import { createContext, useContext } from "react"
export interface IContext {
    userText: string;
    changeUserText: (text: string) => void;
    backgroundColor:string;
    color:string
    changeStyleValue:(text:string, value:string)=> void;
    imageName:string
}



export const TextContext =createContext<IContext | null>({
    userText: "",
    changeUserText: () => {},
    backgroundColor:"",
    color:"",
    changeStyleValue:()=>{},
    imageName:""
});
export const useGlobalContext = () => useContext(TextContext)