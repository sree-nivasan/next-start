const { createContext, useState, useContext } = require("react");
const ThemeContext = createContext( { dark : false , toggleTheme : ()=>{} } );

const ThemeProvider = ({children})=>{
    
    const [dark  ,setDark] = useState(false);
    
    const toggleTheme = ()=>{
    setTheme(!dark) 
    } 

    return (<ThemeContext.Provider value={{dark , toggleTheme}}> {children} </ThemeContext.Provider>)
}

export const useTheme = ()=>{
      return useContext(ThemeContext) 
}

export default  ThemeProvider 