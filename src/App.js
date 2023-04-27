
import './App.css';
import { ImageCard } from './components/ImageCard/ImageCards';
import { Card } from './components/card/card';
import { InfoCard } from './components/infoCard/infoCard';
import { NavBar } from './components/navCard/navCard';

function App() {
  return (
    <div className="App">
     <NavBar className="nav-bar" />
     <Card/>
     
     <InfoCard/>
     <ImageCard/>
    </div>
  );
}

export default App;
