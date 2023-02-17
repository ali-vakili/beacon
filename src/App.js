import React, { Component } from 'react'
import NavBar from './components/navbar';
import Footer from './components/footer';
import Market from './pages/market/Market';
import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className='container-beacon p-0'>
          <NavBar />
          <Market />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
