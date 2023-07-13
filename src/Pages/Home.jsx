import { useContext, useEffect } from "react"
import { DataContext } from "../context/context"
import { data } from "../data"
import { useNavigate } from "react-router-dom";
import "../App.css"

export const Home = () => {
    const {state, dispatch} = useContext(DataContext);
    const navigate = useNavigate()
    useEffect(() => {
        dispatch({type: "FETCH_DATA", payload: data.continents})
    },[dispatch]);
    console.log(state);
    const goToCountry = (id) => {
        navigate(`/${id}`);
        

    }
    return (
        <div>
            WELCOME TO TRIP ADVISOR
            <h3>Top Contnents for your next holiday</h3>
            <button onClick={() => navigate("/mcr8")}>go to mcr 8</button>
            <div className="container">
            {
                state.continentsData.map(item => (
                    <div key={item.id} onClick={() => goToCountry(item.id)}>
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
            
        </div>
    )
}