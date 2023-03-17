import { useEffect, useRef } from 'react';
import { FixedElement } from 'react-nice-scroll';
import "../assets/css/indicator.css";

const Indicator = () => {
  const fixedEl = useRef();

  useEffect(() => {
    fixedEl.current.parentElement.classList.add('ns-sticky-element');
  }, []);

  return (
    <FixedElement top={0}>
      <div className="specifier-container indicator-beacon" ref={fixedEl}>
        <div className="indicator items">
          <div className="coin-name item">
            <h5>Coin Name</h5>
          </div>
          <div className="coin-price item">
            <h5>Price</h5>
          </div>
          <div className="coin-change change-1h item">
            <h5>1h Change</h5>
          </div>
          <div className="coin-change change-24h item">
            <h5>24h Change</h5>
          </div>
          <div className="coin-market-cap item">
            <h5>Market Cap</h5>
          </div>
        </div>
      </div>
    </FixedElement>
  );
  
};

export default Indicator;
