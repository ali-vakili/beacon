import React, { Component } from 'react'
import '../../components/assets/css/indicator.css'
import './coin.css'

class Coin extends Component {
  state = {  }

  render() {
    return (
      <div className='coin-container indicator-beacon'>
        <div className='coin items'>
          <div className='coin-name item'>
            <img className='coin-image' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="bitcoin" />
            <div className='name'>
              <h5 className='c-name'>Bitcoin</h5>
              <h5 className='c-symbol m-0'>BTC</h5>
            </div>
          </div>
          <div className='coin-price item'>
            <h5>$ 24,689</h5>
          </div>
          <div className='coin-change item'>
            <div className='change'>
              <div className='change-badge positive-badge'>
                <span className='polygon positive'><span className='sr-only'>Polygon</span></span>
                <h5>1h Change</h5>
              </div>
            </div>
          </div>
          <div className='coin-change item'>
          <div className='change'>
              <div className='change-badge negative-badge'>
                <span className='polygon negative'><span className='sr-only'>Polygon</span></span>
                <h5>24 Change</h5>
              </div>
            </div>
          </div>
          <div className='coin-market-cap item'>
            <h5>$ 476,369,777,725</h5>
          </div>
        </div>
      </div>
    );
  }

  formatPrice = (price) => {
    const absolutePrice = Math.abs(price);
    const [integer, decimal] = String(absolutePrice).split('.')
    const formattedDecimal = decimal ? decimal.slice(0, 2) : null;
    console.log(formattedDecimal)
    const formttedPrice = Number(integer).toLocaleString('en-US');
    const correctPrice = decimal ? `${formttedPrice}.${formattedDecimal}`: formttedPrice;

    return correctPrice
  }

  getBageClasses = (number) =>{
    let sign = Math.sign(number);
    let classes = 'change-badge ';
    classes += sign === 1 ? 'positive-badge' : sign === -1 ? 'negative-badge' : 'zero';
    return classes
  }

  getPolygon = (number) => {
    let sign = Math.sign(number);
    let classes = 'polygon ';
    classes += sign === 1 ? 'positive' : sign === -1 ? 'negative' : null;
    return classes
  }
}
 
export default Coin;