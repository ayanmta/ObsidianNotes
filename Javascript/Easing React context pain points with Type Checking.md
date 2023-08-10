# Working with Dark and Light theme 
 ### lets try implementing it in javascript first :
  * create theme getter and setter 
  * create custom hook for ease of use across application 
 ```javascript
 import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext=()=>{
 const context = useContext(ThemeContext);
 //this ensures it is only called from components wrapped in themeContext Provider
    if(!context){
        throw new Error("themecontext should be used inside theme context provider");
     }
    return context
}
``` 

 * create component to toggle theme :
 ```javascript
// src/components/ThemeSwitch.js

//lets use the custom Hook we created 
import { useContext } from "react";

import { useThemeContext } from "./theme";

const ToggleTheme = () => {

  const [theme, setTheme] = useContext();

  const otherTheme = theme === "dark" ? "light" : "dark";

  

  return (

    <div>

      <Button onClick={() => setTheme(otherTheme)}>

        Switch To `${otherTheme}`

      </Button>

    </div>

  );
};```

# Lets Add Type Now : 

 ## issues with various scenerios :
  * createContext expects a defaultValue 
   ### Problem: 
   ```Typescript
   export const ThemeContext = createContext();
```
   ### solutions : 
    1) when context is initially defined 
   ```typescript
 export const ThemeContext = createContext({
     theme: 'dark',
     setTheme: (theme: string) => {}, }
     );  
```

 * Typecheck children props with **PropsWithChildren**
     ***PropsWithChildren  : PropsWithChildren type **takes your component prop and returns a union type with the children prop appropriately typed**.
  ```Typescript
  export const ThemeProvider = ({ children }:PropsWithChildren<{}>) => {...}
```
