import './App.css';
import { useEffect, useState } from 'react';

import Background from './components/Background/Background.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';

function App() {

  let heroData = [
    {text1: "Dive into", text2:"what you love"},
    {text1: "Indulge", text2:"your passions"},
    {text1: "Give in to", text2:"your passions"},
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}></Background>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App