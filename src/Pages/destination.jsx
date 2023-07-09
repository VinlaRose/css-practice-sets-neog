import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../context/context";

export const Destination = () => {
    const {destinationId} = useParams();
    // const navigate = useNavigate();
    const {state} = useContext(DataContext);
    console.log(state)

    const requiredDestination = state.currentCountry.destinations.find(item => item.id === Number(destinationId))
    console.log(requiredDestination)
   
 
   

    return (
        <div className="country-container">
        
       destination page : {requiredDestination.name}
        </div>
    )
}