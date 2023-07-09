import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../context/context";

export const InsideCountry = () => {
    const {insideCountryId} = useParams();
    const navigate = useNavigate();
    const {state, dispatch} = useContext(DataContext);
   
    const requiredCountry =  state.currentContinent.countries.find(item => item.id === Number(insideCountryId));
    console.log(requiredCountry);
    
    useEffect(() => {
        dispatch({type: "CURRENT_COUNTRY", payload: requiredCountry})
    },[dispatch])

    const goToDestination = (id) => {
        navigate(`/:countryId/${requiredCountry.name}/${id}`)
    }
   

    return (
        <div className="country-container">
        
        {
            requiredCountry.destinations.map(item => (
                <div key = {item.id} onClick={() => goToDestination(item.id)}>
                    {item.name}
                </div>
            ))
        }
        </div>
    )
}