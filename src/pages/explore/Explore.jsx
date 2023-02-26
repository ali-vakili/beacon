import React, { Component } from 'react'
import Title from "../../components/ui/title";
import './explore.css'

class Explore extends Component {
  state = {  } 
  render() { 
    document.title = 'Explore Cryptocurrencies | Find Crypto';

    return (
      <section className='explore section-beacon'>
        <div className="explore-container row gx-0">
          <Title
            title={"Get Details"}
            description={"Search and Find more about the coin that you're interested in"}
          />
        </div>
      </section>
    );
  }
}
 
export default Explore;