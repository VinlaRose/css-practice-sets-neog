import { useParams } from "react-router-dom"
import { Navbar } from "./navbar2";
import "./App2.css"
import { useContext, useState } from "react";
import { MeetingDataContext } from "./context2";

export const DetailsMeeting = () => {
    
    const {meetId} = useParams();
    const {state} = useContext(MeetingDataContext);
    const required = state.meetingData.find(item => item.id === meetId);
    console.log(required);

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Name:', name);
      console.log('Email:', email);
      // Add your logic here for handling the form submission
    };
    return (
        <div>
            <Navbar/>
            <div className="detailsPage">
                <div className="details-left">
                    <h1>{required.title}</h1>
                    Hosted By: 
                    <p>{required.hostedBy}</p>
                    <img style={{height : "400px",  width: "500px"}} src={required.eventThumbnail} alt="" />
                    <h3>Details</h3>
                    <p>{required.eventDescription}</p>
                    <h3>Additional Information: </h3>
                    <p>Dress Code : {required.additionalInformation.dressCode}</p>
                    <p>Age Restrictions: {required.additionalInformation.ageRestrictions}</p>
                    <h3>Events Tags</h3>
                    {
                        required.eventTags.map(item => (
                            <button>{item}</button>
                        ))
                    }
                </div>
                <div className="details-right">
                    <div className="details-card">
                        <div className="timing">
                            {required.eventStartTime} to {required.eventEndTime}
                        </div>
                        <div className="venue">
                            {required.location}
                        </div>
                        <div className="price">
                            {required.price}
                        </div>
                    </div>

                    <div className="speaker-card">
                        <h3>Speakers ({required.speakers.length})</h3>
                        {required.speakers.map(item => (
                            <div key = {item.id}>
                                {item.name}
                            </div>
                        ))}
                    </div>

                    <div>
      <button onClick={togglePopup}>RSVP</button>
      {isOpen && (
        <div className="popup">
          <h2>RSVP Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" value="RSVP" />
          </form>
        </div>
      )}
    </div>
                </div>
            </div>
        </div>
    )
}