import { createContext, useReducer } from "react";

export const DirectionContext = createContext();

const initialState = {
    position: "vertical"
};

const directionReducer = (state, action) => {
    switch (action.type) {
        case "vertical":
            return { position: "vertical" };
        case "horizontal":
            return { position: "horizontal" };
        default:
            return state;
    }
};

export function DirectionProvider(props) {
    const [state, dispatch] = useReducer(directionReducer, initialState);

    return (
        <DirectionContext.Provider value={{ state, dispatch }}>
            {props.children}
        </DirectionContext.Provider>
    );
}
