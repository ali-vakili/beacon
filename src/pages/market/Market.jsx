import React, { Component } from "react";
import "./market.css";
import getFetch from "../../lib/getFetch";
import Title from "../../components/ui/title";
import Indicator from "../../components/ui/indicator";
import Skeleton from "../../components/ui/skeleton";
import Coin from "./coin";

class Market extends Component {

  componentDidMount() {
    this.fetchData()
  }

  state = {
    page: 1,
    coins: null,
    isLoading: true,
  };

  fetchData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${this.state.page}&sparkline=false&price_change_percentage=1h`;
    try {
      this.setState({ isLoading: true });
      const coins = await getFetch(url);
      this.setState({ coins, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { coins, isLoading, error } = this.state;
    return (
      <section className="market section-beacon">
        <div className="market-container row gx-0">
          <Title
            title={"Market Watch"}
            description={"Today's Cryptocurrency Prices"}
          />
          <Indicator />
          {isLoading && <Skeleton />}
          {coins && (
            <div className="coin-container indicator-beacon">
              {coins.map((coin) => (
                <Coin key={coin.id} coin={coin} />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Market;
