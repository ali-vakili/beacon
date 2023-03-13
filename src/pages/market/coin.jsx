import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { formatPrice, getBageClasses, getPolygonClasses } from '../../utils/format'
import "../../components/assets/css/indicator.css";
import "./coin.css";

class Coin extends Component {

  render() {
    const { coin } = this.props;
    const {
      id,
      name,
      symbol,
      image,
      current_price,
      market_cap,
      price_change_percentage_24h,
      price_change_percentage_1h_in_currency,
    } = coin;

    return (
      <Link to={`/market/${id}`} className="coin-detail-link">
        <div className="coin items">
          <div className="coin-name item">
            <img className="coin-image" src={image} alt={name} />
            <div className="name">
              <h5 className="c-name">{name}</h5>
              <h5 className="c-symbol m-0">{symbol.toUpperCase()}</h5>
            </div>
          </div>
          <div className="coin-price item">
            <h5>$ {formatPrice(current_price)}</h5>
          </div>
          <div className="coin-change change-1h item">
            <div className="change">
              <div
                className={getBageClasses(
                  price_change_percentage_1h_in_currency
                )}
              >
                <span
                  className={getPolygonClasses(
                    price_change_percentage_1h_in_currency
                  )}
                >
                  <span className="sr-only">Polygon</span>
                </span>
                <h5>
                  {formatPrice(price_change_percentage_1h_in_currency)}%
                </h5>
              </div>
            </div>
          </div>
          <div className="coin-change change-24h item">
            <div className="change">
              <div className={getBageClasses(price_change_percentage_24h)}>
                <span
                  className={getPolygonClasses(price_change_percentage_24h)}
                >
                  <span className="sr-only">Polygon</span>
                </span>
                <h5>{formatPrice(price_change_percentage_24h)}%</h5>
              </div>
            </div>
          </div>
          <div className="coin-market-cap item">
            <h5>$ {formatPrice(market_cap)}</h5>
          </div>
        </div>
      </Link>
    );
  }
}

export default Coin;
