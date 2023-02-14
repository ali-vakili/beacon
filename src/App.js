import React, { Component } from 'react'
import NavBar from './components/navbar';
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
        </div>
      </React.Fragment>
    );
  }
}

export default App;
