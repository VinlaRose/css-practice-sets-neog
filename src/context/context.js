import { createContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const initialValue = {
    continentsData: [],
    currentContinent: [],
    currentCountry: []
}

export const DataContext = createContext(initialValue);

export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )   
}

