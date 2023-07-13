
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Country } from './Pages/Country';
import { InsideCountry } from './Pages/InsideCountry';
import { Destination } from './Pages/destination';
import { MeetUpHome } from './MCR8/MeetupHome';
import { DetailsMeeting } from './MCR8/Details';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element = {<Home/>} />;
      <Route path='/:countryId' element={<Country/>}/>
      <Route path='/:countryId/:insideCountryId' element={<InsideCountry/>}/>
      <Route path='/:countryId/:insideCountryId/:destinationId' element={<Destination/>}/>


      <Route path="/mcr8" element = {<MeetUpHome/>} />;
      <Route path="/mcr8/:meetId" element = {<DetailsMeeting/>} />;
    </Routes>

    
    
    </div>
  );
}

export default App;
