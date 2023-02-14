import './hero.css'

const Hero = () => {
  return ( 
    <section className="hero section-beacon">
      <div className="content">
        <div className='row gx-0'>
          <h1 class="hero-text display-3 col-md-10 col-lg-8 pe-0">Stay on Track, Check Crypto prices with Beacon</h1>
          <div className='intro col-md-10 col-lg-7'>
            <h4 className='intro-text pe-0'>With Beacon, you'll always have access to the latest market data, so you can stay on top of your investments. Whether you're interested in Bitcoin, Ethereum, or any other.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;