import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import { useLottie } from "lottie-react";

import getFetch from "../../lib/getFetch";
import CoinDetail from '../../components/coin-detail/coinDetail'
import loading from '../../components/assets/lottie/Loading.json'
import Error from "../../components/ui/error";
import './detail.css'

const Detail = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lottieOptions, setLottieOptions] = useState(null)
  const [error, setError] = useState(null);

  const coinName = coinData ? coinData["name"] : 'Coin';
  document.title = `${coinName} Price Today | Coin Detail and Market Cap`;


  useEffect( () => {
    const fetchCoinData = async () =>{
      try {
        setError(null);
        setIsLoading(true);
        const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
        const coinData = coinId ? await getFetch(url) : null;
        setCoinData(coinData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchCoinData()
  }, [coinId]);

  useEffect(() => {
    const options = {
      loop: true,
      autoplay: true,
      animationData: loading,
      style: { width: "120px", height: "120px" },
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        isClickToPauseDisabled: true,
      },
    };
    setLottieOptions(options);

  }, [isLoading]);

  const { View } = useLottie(lottieOptions || {});

  return ( 
    <section className='detail section-beacon'>
      <div className="detail-container row gx-0">
        {error && <Error message={"Something went wrong! Please Come Back later :("} />}
        {isLoading &&
          <div className='lottie-loading d-flex flex-column justify-content-center align-items-center' style={{marginTop:'60px'}}>
            {View}
            <h4>Loading...</h4>
          </div>
        }
        {coinData &&
          <>
            <div className="coin-detai-result">
              <div className='coin-result'>
                <div className="back-current-route">
                  <a href="/market" className="previous-route">Market</a>
                  <span className="forward-arrow">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L5 5L1 1" stroke="#B3B3B3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <h5 className="route-coin-name">{ coinName }</h5>
                </div>
                <h2><span className='search-coin'>{ coinName }</span> Details</h2>
              </div>
            </div>
            <CoinDetail coinData={coinData} /> 
          </>
        }
      </div>
    </section>
  );
}

export default Detail;