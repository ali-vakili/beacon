import React, { Component } from 'react'
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className='container-beacon p-0'>
          <NavBar />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
