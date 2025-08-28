import React, {createContext , useState , useEffect} from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const[theme, setTheme] = useState("light");

    useEffect(()=>{
        // Sirf DaisyUI ke liye data-theme attribute set karein
        document.documentElement.setAttribute("data-theme", theme);
    //      if (theme === "dark") {
    //   document.documentElement.classList.add("dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }
    },[theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;