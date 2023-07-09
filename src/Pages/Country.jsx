import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../context/context";

export const Country = () => {
    const {countryId} = useParams();
    const navigate = useNavigate();
    const {state,dispatch} = useContext(DataContext)
    const requiredContinent =  state.continentsData.find(item => item.id === Number(countryId));
    console.log(requiredContinent);
    useEffect(() => {
        dispatch({type: "CURRENT_CONTINENT", payload: requiredContinent})
    },[dispatch])
    const goToInsideCountry = (id) => {
        navigate(`/${requiredContinent.name}/${id}`)
        console.log(id)
    }
    return (
        <div className="country-container">
        
        <div className="back-vutton"><button onClick={() => navigate("/")}>GoBack</button></div>
         {
            requiredContinent.countries.map(item => (
                <div  key = {item.id} onClick={() => goToInsideCountry(item.id)}>{item.name}</div>
            ))
         }
        </div>
    )
}