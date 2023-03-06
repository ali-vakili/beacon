import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Hero from './pages/hero/Hero';
import Market from './pages/market/Market';
import Explore from './pages/explore/Explore';
import './App.css';

const App = () => {
  const location = useLocation();
  const isHeroRoute = location.pathname === '/' ? 'landing-page-beacon' : '';

  return (
    <div className={`container-beacon p-0 ${isHeroRoute}`}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
