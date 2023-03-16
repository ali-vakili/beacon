import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getFetch from '../../lib/getFetch';
import Title from '../../components/ui/title';
import Indicator from '../../components/ui/indicator';
import Skeleton from '../../components/ui/skeleton';
import Error from '../../components/ui/error';
import Pagination from './pagination';
import Coin from './coin';
import './market.css';

const Market = () => {
  const location = useLocation();
  const currentPage = parseInt(location.search.replace("?page=", "")) || 1;

  const [page, setPage] = useState(currentPage);
  const [coinPerPage] = useState(20);
  const [coins, setCoins] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const totalCoins = 240;

  useEffect(() => {
    const fetchData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinPerPage}&page=${page}&sparkline=false&price_change_percentage=1h`;
      try {
        setIsLoading(true);
        const coins = await getFetch(url);
        setCoins(coins);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        setCoins(null);
      }
    };
    fetchData();
  }, [page, coinPerPage]);

  const totalPage = Math.ceil(totalCoins / coinPerPage);
  document.title = 'Cryptocurrency Market | Crypto Prices';

  const changePage = (page) => {
    setPage(page);
  };

  const previousPage = () => {
    let newPage = page;
    newPage = page > 1 ? newPage = page - 1 : page;
    setPage(newPage);
  };

  const nextPage = (lastPage) => {
    let newPage = page;
    newPage = page < lastPage ? newPage = page + 1 : page;
    setPage(newPage);
  };

  return (
    <section className="market section-beacon">
      <div className="market-container row gx-0">
        <Title title={'Market Watch'} description={"Today's Cryptocurrency Prices"} />
        <Indicator />
        {isLoading && <Skeleton />}
        {coins && (
          <div className="coin-container indicator-beacon">
            {coins.map((coin) => (
              <Coin key={coin.id} coin={coin} />
            ))}
            <Pagination
              currentPage={page}
              totalPage={totalPage}
              perPage={coinPerPage}
              changePage={changePage}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          </div>
        )}
        {error && <Error message={'Something went wrong! Please Come Back later :('} />}
      </div>
    </section>
  );
};

export default Market;