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
    1) case -> when context is initially defined 
   ```typescript
 export const ThemeContext = createContext({
     theme: 'dark',
     setTheme: (theme: string) => {}, }
     );  
```
    2) case -> when context is initially undefined
 try: 
```typescript
type ContextType={

    theme:string,

    setTheme:(theme:string)=> void

}

//wrong
export const ThemeContext = createContext<ContextType>(undefined);

/*ISSUE: Argument of type 'undefined' is not assignable to parameter of type 'ContextType'.typescript(2345) */

//correct:
export const ThemeContext = createContext<ContextType| undefined>(undefined);
```
 * Typecheck children props with **PropsWithChildren**
     ***PropsWithChildren  : PropsWithChildren type **takes your component prop and returns a union type with the children prop appropriately typed**.
     1) case -> when context is initially defined 
  ```Typescript
  export const ThemeProvider = ({ children }:PropsWithChildren<{}>) => {...}
```
 2) case -> when context is initially undefined
  ```typescript

//wrong:
export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState("");
 /*ISSUE: in usestate theme ; Type 'undefined' is not assignable to type 'string'. */

//possible solution:
export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<ContextType["theme"]>();
  
  /*ISSUE: Type 'string | undefined' is not assignable to type 'string'. Type 'undefined' is not assignable to type 'string'.*/
  z

```
Currently, the state is `ContextType['theme'] | undefined`, but the context type expects a `ContextType['theme']` for that property. To fix this, the simplest solution is to explicitly pass a default value of the same type as the context value. In our case, this would be an empty string.
```typescript
const [theme, setTheme] = useState<ContextType['theme']>('');

//This ensures that the `theme` type is consistently a `string`, never `undefined`. With this adjustment, our context is now correctly typed.
```


## Final optimal solution :

```typescript

import { PropsWithChildren, createContext, useContext, useState } from "react";

type ContextType = { theme: string; setTheme: (theme: string) => void };

export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {

  const [theme, setTheme] = useState<ContextType["theme"]>("");

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>

      {" "}

      {children}{" "}

    </ThemeContext.Provider>

  );

};

export const useThemeContext = () => {

  const context = useContext(ThemeContext);

  if (!context) {

    throw new Error("useThemeContext must be used inside the ThemeProvider");

  }

  return context;

};```


## Catchy Title & SEO Tags 📈

**Title**: "Mastering Dark and Light Theme Handling in React Context with TypeScript 🌓" **Tags**: React Context, TypeScript, Dark Theme, Light Theme, Type Checking, Context API, Theme Switching, React Hooks, Frontend Development

With this optimized content, your readers will not only grasp the concepts more easily but also enjoy a seamless reading experience. Happy coding and theming! 🎨👩‍💻👨‍💻

# Easing React Context Pain Points with Type Checking 🚀

Are you tired of dealing with tricky type issues when using React Context? Don't worry, we've got you covered! In this blog, we'll walk you through a step-by-step guide on how to tackle one of the most common challenges – working with Dark and Light themes using React Context and TypeScript. 🎉

## Embracing Dark and Light Themes in JavaScript 🔮

Let's start by diving into the JavaScript implementation of our theme switching functionality. We'll create a custom hook and a component to toggle between dark and light themes. 🌗

### Implementing the Magic ✨

```javascript
// src/components/ThemeSwitch.js

import { useThemeContext } from "./theme";

const ToggleTheme = () => {
  const { theme, setTheme } = useThemeContext();
  const otherTheme = theme === "dark" ? "light" : "dark";

  return (
    <div>
      <Button onClick={() => setTheme(otherTheme)}>
        Switch To {otherTheme} Mode
      </Button>
    </div>
  );
};
```

## Adding Some TypeScript Spice 🌶️

While the JavaScript implementation gets the job done, TypeScript can save us from unexpected errors and provide better code understanding. Let's address the pain points one by one.

### 1. Default Value Dilemma 🤔

#### Problem:
```typescript
export const ThemeContext = createContext();
```
#### Solution:
1) When the context is initially defined:
```typescript
export const ThemeContext = createContext({
  theme: 'dark',
  setTheme: (theme: string) => {},
});
```
2) When the context is initially undefined:

```typescript
  
type ContextType = {
  theme: string,
  setTheme: (theme: string) => void
};

export const ThemeContext = createContext<ContextType | undefined>(undefined);
```

### 2. Type-Checked Props with **PropsWithChildren** 🎈

#### Problem:
```typescript
export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {...}
```
#### Solution:
1) When the context is initially defined:
```typescript
export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {...}
```
2) When the context is initially undefined:
```typescript

//wrong:
export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState("");
 /*ISSUE: in usestate theme ; Type 'undefined' is not assignable to type 'string'. */

//possible solution:
export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<ContextType["theme"]>();
  
  /*ISSUE: Type 'string | undefined' is not assignable to type 'string'. Type 'undefined' is not assignable to type 'string'.*/
```
Currently, the state is `ContextType['theme'] | undefined`, but the context type expects a `ContextType['theme']` for that property. To fix this, the simplest solution is to explicitly pass a default value of the same type as the context value. In our case, this would be an empty string.
```typescript
const [theme, setTheme] = useState<ContextType['theme']>('');
```
This ensures that the `theme` type is consistently a `string`, never `undefined`. Your context is now beautifully typed!

## A Flawless Finale 🌟

After overcoming these TypeScript hurdles, your code will not only be more robust but also cleaner and easier to understand. Here's the final code snippet:

```typescript
import { PropsWithChildren, createContext, useContext, useState } from "react";

type ContextType = { theme: string; setTheme: (theme: string) => void };

export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<ContextType["theme"]>("");
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("useThemeContext must be used inside the ThemeProvider");
  }
  
  return context;
};
```

## Catchy Title & SEO Tags 📈

**Title**: "Mastering Dark and Light Theme Handling in React Context with TypeScript 🌓"
**Tags**: React Context, TypeScript, Dark Theme, Light Theme, Type Checking, Context API, Theme Switching, React Hooks, Frontend Development

With this optimized content, your readers will not only grasp the concepts more easily but also enjoy a seamless reading experience. Happy coding and theming! 🎨👩‍💻👨‍💻