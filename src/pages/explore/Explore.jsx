import React, { Component } from 'react'
import Title from "../../components/ui/title";
import Search from "../../components/ui/search";
import Error from "../../components/ui/error";
import getFetch from "../../lib/getFetch";
import CoinDetail from "./coinDetail";
import Lottie from 'lottie-react';
import loading from './assets/Loading.json'
import './explore.css'

class Explore extends Component {
  
  state = { 
    coinData:null,
    isLoading:false
  } 

  getCoin = async (coinNameLower, coinName) => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinNameLower}`;

    try {
      this.setState({ coinData: null, error: null ,isLoading: true });
      const coinData = coinNameLower ? await getFetch(url) : null;
      this.setState({ coinData, coinName, isLoading: false });

    } catch (error) {
      if (error.message === 'true'){
        const errerorMessage = "Nothing Found For Coin Name";
        this.setState({ coinData:null, coinName, error:errerorMessage, isLoading: false });
      } else {
        const errerorMessage = "Something went wrong! Please Come Back later :(";
        this.setState({ coinData:null, coinName:null, error:errerorMessage, isLoading: false });
      }
    }
  }

  render() {
    const { coinData, error, coinName, isLoading } = this.state;
    document.title = 'Explore Cryptocurrencies | Find Crypto';
    
    return (
      <section className='explore section-beacon'>
        <div className="explore-container row gx-0">
          <Title
            title={"Get Details"}
            description={"Search and Find more about the coin that you're interested in"}
          />
          <Search get={this.getCoin} />
          {isLoading &&
            <div className='lottie-loading d-flex flex-column justify-content-center align-items-center' style={{marginTop:'60px'}}>
              <Lottie
                loop={true}
                autoplay={true}
                animationData={loading}
                style={{ width:'120px', height:'120px' }}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid slice',
                  isClickToPauseDisabled: true
                }}
              />
              <h4>Loading...</h4>
            </div>
          }
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