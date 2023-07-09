
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Country } from './Pages/Country';
import { InsideCountry } from './Pages/InsideCountry';
import { Destination } from './Pages/destination';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element = {<Home/>} />;
      <Route path='/:countryId' element={<Country/>}/>
      <Route path='/:countryId/:insideCountryId' element={<InsideCountry/>}/>
      <Route path='/:countryId/:insideCountryId/:destinationId' element={<Destination/>}/>
    </Routes>

    
    
    </div>
  );
}

export default App;
