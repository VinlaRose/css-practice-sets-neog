import { createContext, useReducer } from "react";
import { reducer2 } from "./reducer2";


const initialValue = {
    meetingData: [],
    filteredData: [],
    
}

export const MeetingDataContext = createContext(initialValue);

export const MeetingDataProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer2, initialValue);

    return (
        <MeetingDataContext.Provider value={{ state, dispatch }}>
            {children}
        </MeetingDataContext.Provider>
    )   
}

