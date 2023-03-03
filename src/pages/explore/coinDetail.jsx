import React, { Component } from 'react'
import CoinBasics from './coinBasics'
import CoinInformation from './coinInformation'
import './coin-detail.css'

class CoinDetail extends Component {

  render() { 
    const { coinData } = this.props;
    const {
      market_data
    } = coinData;

    return (
      <div className="coin-detail-container indicator-beacon">
        <div className='coin-detail'>
          <CoinBasics  market_data={market_data} coinData={coinData}/>
          <CoinInformation market_data={market_data} coinData={coinData} />
        </div>
      </div>
    );
  }
}
 
export default CoinDetail;