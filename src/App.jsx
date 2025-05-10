import { useEffect, useState } from 'react';
import './App.css';

import Carousel from './components/Carousel';

function App() {
  const [karuselData, setKaruselData] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(res=>setKaruselData(res.recipes))
  },[])
  return (
    <div className="App">
      <Carousel data={karuselData}/>
    </div>
  );
}

export default App;