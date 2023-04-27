
import './App.css';
import { ImageCard } from './components/ImageCard/ImageCards';
import { InfoCard } from './components/infoCard/infoCard';
import { NavBar } from './components/navCard/navCard';

function App() {
  return (
    <div className="App">
     
     <NavBar/>
     <InfoCard/>
     <ImageCard/>
    </div>
  );
}

export default App;
