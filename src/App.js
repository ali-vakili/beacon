import React, { Component } from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Hero from './pages/hero/Hero';
import Market from './pages/market/Market';
import './App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className='container-beacon p-0'>
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route exact path="/market" element={<Market />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
