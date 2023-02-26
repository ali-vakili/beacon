import React, { Component } from "react";
import "../../components/assets/css/indicator.css";
import "./coin.css";

class Coin extends Component {

  render() {
    const { coin } = this.props;
    const {
      name,
      symbol,
      image,
      current_price,
      market_cap,
      price_change_percentage_24h,
      price_change_percentage_1h_in_currency,
    } = coin;

    return (
      <div className="coin items">
        <div className="coin-name item">
          <img className="coin-image" src={image} alt={name} />
          <div className="name">
            <h5 className="c-name">{name}</h5>
            <h5 className="c-symbol m-0">{symbol.toUpperCase()}</h5>
          </div>
        </div>
        <div className="coin-price item">
          <h5>$ {this.formatPrice(current_price)}</h5>
        </div>
        <div className="coin-change change-1h item">
          <div className="change">
            <div
              className={this.getBageClasses(
                price_change_percentage_1h_in_currency
              )}
            >
              <span
                className={this.getPolygonClasses(
                  price_change_percentage_1h_in_currency
                )}
              >
                <span className="sr-only">Polygon</span>
              </span>
              <h5>
                {this.formatPrice(price_change_percentage_1h_in_currency)}%
              </h5>
            </div>
          </div>
        </div>
        <div className="coin-change change-24h item">
          <div className="change">
            <div className={this.getBageClasses(price_change_percentage_24h)}>
              <span
                className={this.getPolygonClasses(price_change_percentage_24h)}
              >
                <span className="sr-only">Polygon</span>
              </span>
              <h5>{this.formatPrice(price_change_percentage_24h)}%</h5>
            </div>
          </div>
        </div>
        <div className="coin-market-cap item">
          <h5>$ {this.formatPrice(market_cap)}</h5>
        </div>
      </div>
    );
  }


  formatPrice = price => {
    const absolutePrice = Math.abs(price);
    const [integer, decimal] = String(absolutePrice).split(".");
    const formattedDecimal = decimal ? decimal.slice(0, 2) : null;
    let formttedPrice = Number(integer).toLocaleString("en-US");
    if (formttedPrice === "0" && formattedDecimal === null){
      formttedPrice = "0.00";
    }

    const correctPrice = decimal ? `${formttedPrice}.${formattedDecimal}` : `${formttedPrice}`;
    return correctPrice;
  };

  getBageClasses = number => {
    let classes = "change-badge ";
    const sign = Math.sign(number);

    const result = this.checkZeroPrice(number);
    result === true ? classes += "zero" : classes += sign === 1 ? "positive-badge" : sign === -1 ? "negative-badge" : "zero";
    return classes;
  };

  getPolygonClasses = number => {
    let classes = "polygon ";
    const sign = Math.sign(number);

    const result = this.checkZeroPrice(number)
    result === true ? classes="" : classes += sign === 1 ? "positive" : sign === -1 ? "negative" : null;
    return classes;
  };

  checkZeroPrice = number => {
    const absoluteNumber = Math.abs(number);
    const [integer, decimal] = String(absoluteNumber).split(".");
    const formattedDecimal = decimal ? decimal.slice(0, 2) : null;
    const correctPrice = decimal ? `${integer}.${formattedDecimal}` : `${integer}`;

    if (correctPrice === "0" || correctPrice=== "0.00") {
      return true;
    }
    else{
      return false;
    }
  }
}

export default Coin;
