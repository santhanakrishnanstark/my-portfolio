import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import WIDSection from './Components/WIDSection/WIDSection';
import WorkProcess from './Components/WorkProcess/WorkProcess';

function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <WIDSection />
      <WorkProcess />
      <UnderConstruction />
    </React.Fragment>
  );
}

export default App;
