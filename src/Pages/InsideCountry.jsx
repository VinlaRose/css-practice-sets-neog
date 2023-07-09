import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../context/context";
import "../App.css"

export const InsideCountry = () => {
    const {insideCountryId} = useParams();
    const navigate = useNavigate();
    const {state, dispatch} = useContext(DataContext);
   
    const requiredCountry =  state.currentContinent.countries.find(item => item.id === Number(insideCountryId));
    console.log(requiredCountry);
    
    useEffect(() => {
        dispatch({type: "CURRENT_COUNTRY", payload: requiredCountry})
    },[requiredCountry, dispatch])

    const goToDestination = (id) => {
        navigate(`/:countryId/${requiredCountry.name}/${id}`)
    }
   

    return (
        <div className="container">
        
        {
            requiredCountry.destinations.map(item => (
                <div key = {item.id} onClick={() => goToDestination(item.id)}>
                   
                    <div className="card">
                        <img src={item.image} alt="Location" className="card-image" />
                        <div className="location-container">
                            <span className="location-icon">&#x1F30D;</span>
                            <span className="location-name">{item.name}</span>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    )
}