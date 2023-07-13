export const reducer2 = (state,action) => {
    switch(action.type){
        case "FETCH_DATA":
            return{
                ...state,
                meetingData: action.payload,
                filteredData: action.payload
               
            }
            case "FETCH_ONLINE_DATA":
                return{
                    ...state,
                   
                    filteredData: action.payload
                   
                }
                case "FETCH_OFFLINE_DATA":
                    return{
                        ...state,
                        
                        filteredData: action.payload
                       
                    }
       
        default: 
            return state;
    }
}