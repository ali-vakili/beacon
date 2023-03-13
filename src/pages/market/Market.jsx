import React, { Component } from "react";
import getFetch from "../../lib/getFetch";
import Title from "../../components/ui/title";
import Indicator from "../../components/ui/indicator";
import Skeleton from "../../components/ui/skeleton";
import Error from "../../components/ui/error";
import Pagination from "./pagination"
import Coin from "./coin";
import "./market.css";

class Market extends Component {

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchData();
    }
  }

  state = {
    page: 1,
    coinPerPage:20,
    coins: null,
    isLoading: true,
    totalCoins:240,
  };

  fetchData = async () => {
    const { page, coinPerPage } = this.state;
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinPerPage}&page=${page}&sparkline=false&price_change_percentage=1h`;
    try {
      this.setState({ isLoading: true });
      const coins = await getFetch(url);
      this.setState({ coins, isLoading: false, error: null });
    } catch (error) {
      this.setState({ error, isLoading: false, coins: null });
    }
  }

  render() {
    const { coins, isLoading, error } = this.state;
    const totalPage = Math.ceil(this.state.totalCoins / this.state.coinPerPage);
    document.title = 'Cryptocurrency Market | Crypto Prices';
    
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
              <Pagination
                currentPage={this.state.page}
                totalPage={totalPage}
                perPage={this.state.coinPerPage}
                changePage={this.changePage}
                previousPage={this.previousPage}
                nextPage={this.nextPage}
              />
            </div>
          )}
          {error && <Error message={"Something went wrong! Please Come Back later :("} />}
        </div>
      </section>
    );
  }

  changePage = page =>{
    this.setState({ page });
  }

  previousPage = () => {
    let{ page } = this.state;
    page = page > 1 ? page = page - 1 : page;
    this.setState({ page });
  }

  nextPage = (lastPage) => {
    let{ page } = this.state;
    page = page < lastPage ? page = page + 1 : page;
    this.setState({ page });
  }
}

export default Market;
