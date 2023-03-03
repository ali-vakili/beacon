import React, { Component } from 'react'
import Title from "../../components/ui/title";
import Search from "../../components/ui/search";
import Error from "../../components/ui/error";
import getFetch from "../../lib/getFetch";
import CoinDetail from "./coinDetail";
import './explore.css'

class Explore extends Component {
  
  state = { 
    coinData:null
  } 

  getCoin = async (coinNameLower, coinName) => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinNameLower}`;

    try {
      const coinData = coinNameLower ? await getFetch(url) : null;
      this.setState({ coinData, coinName, error:null });

    } catch (error) {
      if (error.message === 'true'){
        const errerorMessage = "Nothing Found For Coin Name";
        this.setState({ coinData:null, coinName, error:errerorMessage });
      } else {
        const errerorMessage = "Something went wrong! Please Come Back later :(";
        this.setState({ coinData:null, coinName:null, error:errerorMessage });
      }
    }
  }

  render() {
    const { coinData, error, coinName } = this.state;
    document.title = 'Explore Cryptocurrencies | Find Crypto';
    
    return (
      <section className='explore section-beacon'>
        <div className="explore-container row gx-0">
          <Title
            title={"Get Details"}
            description={"Search and Find more about the coin that you're interested in"}
          />
          <Search get={this.getCoin} />
          {coinData && (
            <>
              <div className='coin-result'>
                <h2>Results for <span className='search-coin'>{ this.state.coinName }</span></h2>
              </div>
              <CoinDetail coinData={coinData} /> 
            </>
          )}
        </div>
        {error && <Error message={error} extraMessage={coinName} />}
      </section>
    );
  }
}
 
export default Explore;