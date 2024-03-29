import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Hero from './pages/hero/Hero';
import Market from './pages/market/Market';
import Detail from './pages/market/detail';
import Explore from './pages/explore/Explore';
import './App.css';

import { ScrollContainer } from 'react-nice-scroll';
import detectTouch from './isTouch';
import 'react-nice-scroll/dist/styles.css';
import './react-nice-scroll.css';

const App = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const location = useLocation();
  const isHeroRoute = location.pathname === '/' ? 'landing-page-beacon' : '';
  const scrollContainer = document.querySelector(".ns-container");

  useEffect(() => {
    setIsTouchScreen(detectTouch());
  }, []);

  isTouchScreen && scrollContainer.classList.add("touch-screen");

  return (
    <ScrollContainer>
      <div className={`container-beacon p-0 ${isHeroRoute}`}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/market" element={<Market />} />
          <Route exact path="/market/:coinId" element={<Detail />} />
          <Route exact path="/explore" element={<Explore />} />
        </Routes>
        <Footer />
      </div>
    </ScrollContainer>
  );
}

export default App;
