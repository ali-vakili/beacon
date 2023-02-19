import React, { Component } from "react";
import "./market.css";
import Title from "../../components/ui/title";
import Indicator from "../../components/ui/indicator";
import Skeleton from "../../components/ui/skeleton";
import Coin from "./coin";

class Market extends Component {
  state = {};
  render() {
    return (
      <section className="market section-beacon">
        <div className="market-container row gx-0">
          <Title
            title={"Market Watch"}
            description={"Today's Cryptocurrency Prices"}
          />
          <Indicator />
          <div className="coin-container indicator-beacon">
            <Coin />
          </div>
          <Skeleton />
        </div>
      </section>
    );
  }
}

export default Market;
