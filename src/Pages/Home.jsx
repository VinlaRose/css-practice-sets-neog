import { useContext, useEffect } from "react"
import { DataContext } from "../context/context"
import { data } from "../data"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const {state, dispatch} = useContext(DataContext);
    const navigate = useNavigate()
    useEffect(() => {
        dispatch({type: "FETCH_DATA", payload: data.continents})
    },[dispatch]);
    console.log(state);
    const goToCountry = (id) => {
        navigate(`/${id}`)

    }
    return (
        <div>
            WELCOME TO TRIP ADVISOR
            {
                state.continentsData.map(item => (
                    <div key={item.id} onClick={() => goToCountry(item.id)}>{item.name}</div>
                ))
            }
        </div>
    )
}