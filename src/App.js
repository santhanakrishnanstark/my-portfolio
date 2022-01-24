import React from 'react';
import './App.css';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import MyProjects from './Components/MyProjects/MyProjects';
import SkillsAndExperience from './Components/SkillsAndExperience/SkillsAndExperience';
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
      <SkillsAndExperience />
      <MyProjects />
      <GetInTouch />
      {/* <UnderConstruction /> */}
    </React.Fragment>
  );
}

export default App;
