export const reducer = (state,action) => {
    switch(action.type){
        case "FETCH_DATA":
            return{
                ...state,
                continentsData: action.payload
               
            }
        case "CURRENT_CONTINENT":
            return{
                ...state,
                currentContinent: action.payload
               
               
            }
        case "CURRENT_COUNTRY": 
         return{
            ...state,
            currentCountry: action.payload
           
         }    
        default: 
            return state;
    }
}