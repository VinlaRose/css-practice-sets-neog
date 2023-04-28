
import './App.css';
import { ImageCard } from './components/ImageCard/ImageCards';
import { Card } from './components/card/card';
import { InfoCard } from './components/infoCard/infoCard';
import { NavBar } from './components/navCard/navCard';
import { PriceCard } from './components/priceCard/priceCard';

function App() {
  return (
    <div className="App">
     <NavBar className="nav-bar" />
     <br/>
     <PriceCard/>
     <br/>
     <Card/>
     <br/>
     <InfoCard/>
     <br/>
     <ImageCard/>
    </div>
  );
}

export default App;
