import React, { Component } from 'react'
import Title from '../../components/ui/title'

class Market extends Component {
  state = {  } 
  render() { 
    return (
      <section className='market section-beacon'>
        <Title title={'Market Watch'} description={'Today\'s Cryptocurrency Prices'} />
      </section>
    );
  }
}
 
export default Market;