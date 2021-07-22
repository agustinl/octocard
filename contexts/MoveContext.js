import { createContext, useReducer } from "react";

export const MoveContext = createContext();

const initialState = {
    tilt: false
};

const moveReducer = (state, action) => {
    switch (action.type) {
        case false:
            return { tilt: false };
        case true:
            return { tilt: true };
        default:
            return state;
    }
};

export function MoveProvider(props) {
    const [state, dispatch] = useReducer(moveReducer, initialState);

    return (
        <MoveContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MoveContext.Provider>
    );
}
