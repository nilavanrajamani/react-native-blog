import React, { useReducer } from 'react';

const createDataContext = (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return <Context.Provider value={{ state: state }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider }
}

export default createDataContext;