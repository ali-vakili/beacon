import React, { Component } from 'react'
import './market.css'
import Title from '../../components/ui/title'
import Indicator from '../../components/ui/indicator'
import Coin from './coin'

class Market extends Component {
  state = {  } 
  render() { 
    return (
      <section className='market section-beacon'>
        <Title title={'Market Watch'} description={'Today\'s Cryptocurrency Prices'} />
        <Indicator />
        <Coin />
      </section>
    );
  }
}
 
export default Market;