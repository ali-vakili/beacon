import { formatPrice, getBageClasses, getPolygonClasses } from '../../utils/format'

const CoinBasics = ({ coinData, market_data }) => {

  const {
    name,
    symbol,
    image,
  } = coinData;

  const {
    market_cap_rank,
    price_change_percentage_24h,
    current_price:{ usd:current_price_usd },
  } = market_data

  return ( 
    <div className='coin-basics'>
      <div className='coin-identity'>
        <img className="coin-image" src={image["large"]} alt={ name }/>
        <div className="coin-name-symbol">
          <h4 className="c-name m-0">{ name }</h4>
          <h4 className="c-symbol m-0">{ symbol.toUpperCase() }</h4>
          <div className='rank-badge'>
            <h5 className='m-0'>Rank <span className='rank'>{market_cap_rank}</span></h5>
          </div>
        </div>
      </div>
      <div className="current-price">
        <div className='price'>
          <h2 className='m-0'>$ {formatPrice(current_price_usd)}</h2>
        </div>
        <div className="change change-percentage-24h">
          <div className={getBageClasses(price_change_percentage_24h)}>
            <span className={getPolygonClasses(price_change_percentage_24h)}>
              <span className="sr-only">Polygon</span>
            </span>
            <h5 className='m-0'>{formatPrice(price_change_percentage_24h)}%</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinBasics;