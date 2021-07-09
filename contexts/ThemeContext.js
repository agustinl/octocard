import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
    theme: "light"
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case "light":
            return { theme: "light" };
        case "dark":
            return { theme: "dark" };
        default:
            return state;
    }
};

export function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
