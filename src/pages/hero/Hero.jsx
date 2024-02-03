import React, { useState } from 'react';
import Presentation from './presentation'
import Community from './Community';
import Statistics from './Statistics';

import Button from '../../components/ui/button'

import market from './image/Market-Mockup-Hero.png'
import detail from './image/Detail-Mockup-Hero.png'
import explore from './image/Explore-Mockup-Hero.png'

import './hero.css'

const Hero = () => {
  document.title = 'Beacon | Cryptocurrency Market | Stay on Track | Check Crypto Prices';
  const [presentations] = useState(
    [
      {
        presentations_title:"detail_presentation",
        title: "Wanna Get More Detail?",
        textTitle: "There is a lot more that you can get",
        text: "When it comes to investing in cryptocurrencies, one important factor to consider is the coin details.",
        image: detail,
      },

      {
        presentations_title:"explore_presentation",
        title: "Couldn’t  Found The Coin That You Want?",
        textTitle: "Go ahead and search your coin",
        text: "Whether you're a seasoned cryptocurrency investor or just starting out, taking the time to research and understand the coins you're interested in and continue your investment journey.",
        image: explore,
        side: "left"
      },
    ]
  );

  return (
    <>
      <section className="hero section-beacon">
        <div className="content">
          <div className='content-row row align-items-center gx-0'>
            <div className='col-lg-8'>
              <h1 class="hero-text display-3 col-md-10 col-xxl-10 col-lg-12 pe-0">Stay on Track, Check Crypto Prices with Beacon</h1>
              <div className='intro col-md-10 col-xxl-9 col-lg-11'>
                <h4 className='intro-text pe-0'>With Beacon, you'll always have access to the latest market data, so you can stay on top of your investments. Whether you're interested in Bitcoin, Ethereum, or any other.</h4>
              </div>
              <div className='action w-100'>
                <div className='d-grid gap-2 col-2 mx-auto ms-0'>
                  <Button value={'Market'} classes={'hero-market'} location={'/market'}/>
                </div>
              </div>
            </div>
            <div className='hero-preview col-md-10 col-lg-4'>
              <img src={market} alt="market" className='col-12'/>
            </div>
          </div>
        </div>
      </section>
      <section className="presentations section-beacon">
        {presentations.map(presentation =>(
          <Presentation key={presentation.presentations_title} presentation={presentation}/>
        ))}
      </section>
      <section className='statistics section-beacon'>
        <Statistics />
      </section>
      <section className='community section-beacon'>
        <Community />
      </section>
    </>
  );
}

export default Hero;