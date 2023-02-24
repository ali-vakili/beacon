import Button from '../../components/ui/button'
import market from './image/Market-Mockup-Hero.png'
import './hero.css'

const Hero = () => {
  return ( 
    <section className="hero section-beacon">
      <div className="content">
        <div className='row justify-content-center align-items-center gx-0'>
          <div className='col-lg-8'>
            <h1 class="hero-text display-3 col-md-10 col-lg-12 pe-0">Stay on Track, Check Crypto prices with Beacon</h1>
            <div className='intro col-md-10 col-lg-11'>
              <h4 className='intro-text pe-0'>With Beacon, you'll always have access to the latest market data, so you can stay on top of your investments. Whether you're interested in Bitcoin, Ethereum, or any other.</h4>
            </div>
            <div className='action w-100'>
              <div className='d-grid gap-2 col-2 mx-auto ms-0 mt-4'>
                <Button value={'Market'} classes={'hero-market'} location={'/market'}/>
              </div>
            </div>
          </div>
          <div className='hero-preview col-md-8 col-lg-4'>
            <img src={market} alt="market" className='col-12'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;