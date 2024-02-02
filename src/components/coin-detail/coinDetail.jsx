import React, { Component } from 'react'
import CoinBasics from './coinBasics'
import CoinInformation from './coinInformation'
import CoinDescription from './coinDescription'
import '../assets/css/coin-detail.css'

class CoinDetail extends Component {

  render() { 
    const { coinData } = this.props;
    const {
      market_data
    } = coinData;

    return (
      <div className='coin-details'>
        <div className="coin-detail-container indicator-beacon">
          <div className='coin-detail'>
            <CoinBasics market_data={market_data} coinData={coinData}/>
            <CoinInformation market_data={market_data} coinData={coinData} />
          </div>
        </div>
        <div className='coin-description'>
          <CoinDescription coinData={coinData}/>
        </div>
      </div>
    );
  }
}
 
export default CoinDetail;