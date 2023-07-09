import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../context/context";
import "../App.css"

export const Country = () => {
    const {countryId} = useParams();
    const navigate = useNavigate();
    const {state,dispatch} = useContext(DataContext)
    const requiredContinent =  state.continentsData.find(item => item.id === Number(countryId));
    console.log(requiredContinent);
    useEffect(() => {
        dispatch({type: "CURRENT_CONTINENT", payload: requiredContinent})
    },[requiredContinent, dispatch])
    const goToInsideCountry = (id) => {
        navigate(`/${requiredContinent.name}/${id}`);
        
        console.log(id)
    }
    return (
        <div className="container">
        
        <div className="back-vutton"><button onClick={() => navigate("/")}>GoBack</button></div>
         {
            requiredContinent.countries.map(item => (
                <div  key = {item.id} onClick={() => goToInsideCountry(item.id)}>
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