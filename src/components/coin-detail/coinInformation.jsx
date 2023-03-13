import { formatPrice } from '../../utils/format'

const CoinInformation = ({ market_data, coinData }) => {

  const {
    symbol,
  } = coinData;

  const {
    ath:{ usd:ath_usd },
    market_cap:{ usd:market_cap_usd },
    high_24h:{ usd:high_24h_usd },
    low_24h:{ usd:low_24h_usd },
    price_change_24h,
    price_change_percentage_24h,
    price_change_percentage_1h_in_currency:{ usd:price_change_percentage_1h_usd },
    market_cap_change_percentage_24h_in_currency:{ usd:market_cap_change_percentage_24h_usd },
    circulating_supply,
    max_supply
  } = market_data

  return ( 
    <div className='coin-market-informations row'>
      <div className='price-changes coin-detail-card col-md-6'>
        <div className="detail-card">
          <div className='detail-title'>
            <h4>Price Changes</h4>
            <h5>($, %)</h5>
          </div>
          <div className='detail-body'>
            <div className='price-change-24h detail'>
              <h5 className='subject'>Price change(24h):</h5>
              <h5>$ {formatPrice(price_change_24h)}</h5>
            </div>
            <div className='percentage-24h detail'>
              <h5 className='subject'>Percentage(24h):</h5>
              <h5 className={getPositiveOrNegative(price_change_percentage_24h)}>
                {formatPrice(price_change_percentage_24h)}%
              </h5>
            </div>
            <div className='percentage-1h detail'>
              <h5 className='subject'>Percentage(1h):</h5>
              <h5 className={getPositiveOrNegative(price_change_percentage_1h_usd)}>
                {formatPrice(price_change_percentage_1h_usd)}%
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='price-range coin-detail-card col-md-6'>
        <div className="detail-card">
          <div className='detail-title'>
            <h4>Price Range</h4>
            <h5>(24h)</h5>
          </div>
          <div className='detail-body'>
            <div className='price-high detail'>
              <h5 className='subject'>High:</h5>
              <h5>$ {formatPrice(high_24h_usd)}</h5>
            </div>
            <div className='price-low detail'>
              <h5 className='subject'>Low:</h5>
              <h5>$ {formatPrice(low_24h_usd)}</h5>
            </div>

            <div className='ath detail'>
              <h5 className='subject'>ATH:</h5>
              <h5>$ {formatPrice(ath_usd)}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='market-cap coin-detail-card col-md-6'>
        <div className="detail-card">
          <div className='detail-title'>
            <h4>Market Cap</h4>
          </div>
          <div className='detail-body'>
            <div className='market-total-value detail'>
              <h5 className='subject'>Total value:</h5>
              <h5>$ {formatPrice(market_cap_usd)}</h5>
            </div>
            <div className='marke-percentage-24h detail'>
              <h5 className='subject'>Percentage 24h:</h5>
              <h5 className={getPositiveOrNegative(market_cap_change_percentage_24h_usd)}>
                {formatPrice(market_cap_change_percentage_24h_usd)}%
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='circulating-supply coin-detail-card col-md-6'>
        <div className="detail-card">
          <div className='detail-title'>
            <h4>Circulating Supply</h4>
          </div>
          <div className='detail-body'>
            <div className='total-supply detail'>
              <h5 className='subject'>Total Supply:</h5>
              <h5>{formatPrice(circulating_supply)} { symbol.toUpperCase() }</h5>
            </div>
            <div className='max-supply detail'>
              <h5 className='subject'>Max Supply:</h5>
              <h5>{formatPrice(max_supply)} { symbol.toUpperCase() }</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

const getPositiveOrNegative = number => {
  let classes = "";
  const sign = Math.sign(number);
  classes += sign === 1 ? "positive" : sign === -1 ? "negative" : "zero";
  return classes;
}


export default CoinInformation;