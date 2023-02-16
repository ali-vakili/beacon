import React, { Component } from 'react'
import NavBar from './components/navbar';
import Footer from './components/footer';
import Hero from './pages/hero/Hero';
import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className='container-beacon p-0'>
          <NavBar />
          <Hero />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
