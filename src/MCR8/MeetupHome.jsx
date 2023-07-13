import { useContext, useEffect, useState } from "react"


import { useNavigate } from "react-router-dom";
import { data2 } from "./data2";
import { MeetingDataContext } from "./context2";
import "./App2.css"
import { Navbar } from "./navbar2";

export const MeetUpHome = () => {
    const {state, dispatch} = useContext(MeetingDataContext);
    const [status, setStatus] = useState("All");

    const handleChange = (e) => {
      setStatus(e.target.value);
      
     
    };
  
   
    const navigate = useNavigate();
    const goToMeet = (id) => {
        navigate(`/mcr8/${id}`)
    }
    useEffect(() => {
        if (status === "All") {
            dispatch({type: "FETCH_DATA", payload: data2.meetups})
          } if(status === "online") {
            dispatch({type: "FETCH_ONLINE_DATA", payload: data2.meetups.filter((item) => item.eventType === "Online")})
          } if(status === "offline") {
            dispatch({type: "FETCH_OFFLINE_DATA", payload: data2.meetups.filter((item) => item.eventType === "Offline")})
          }
    },[status,dispatch]);

    console.log(state);



    return (
        <div>
            <Navbar/>
          
        <h1>Meetup Events</h1>
        <select onChange={handleChange} value={status}>
        <option value="All">All</option>   
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>
        <div className="meeting-wrapper">
        {
            state.filteredData.map(item => (
              
                <div className="card" key={item.id} onClick={() => goToMeet(item.id)}>
                    
                    <img src={item.eventThumbnail} alt=" " />
                <div className="badge">
                  {item.eventType}
                

                    </div>
                
                <div className="date-time">
                  {item.eventStartTime}
                </div>
                <h3>{item.title}</h3>
              </div>
            ))
        }
        </div>

        

        
            
        </div>
    )
}