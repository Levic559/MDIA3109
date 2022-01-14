import { useContext ,createContext ,useState  } from "react";

const initialStates = {
    theme:'latte',
    setTheme :()=>{},
    theme2:'clown',
    setTheme2:()=>{}
}

const MyThemeContext = createContext(initialStates);


export default function MyThemeProvider({children}){

   const [theme, setTheme] = useState(initialStates.theme);
   const [theme2, setTheme2] = useState(initialStates.theme2);
  

    return <MyThemeContext.Provider value={{theme,setTheme,theme2,setTheme2}}>
        {children}
    </MyThemeContext.Provider>
}

export const useTheme =()=>{
    return useContext(MyThemeContext)
}

