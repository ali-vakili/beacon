import "./marketCoverage.css"

const MarketCoverage = () => {
  return (
    <>
      <div className="market-coverage-content row w-100 align-items-center mx-0">
        <div className="col-md-6 p-0 pe-sm-5 pe-3">
          <h5 className="title">Market Coverage</h5>
          <h2 className="sub-title">Your guiding light through the intricate maze of financial markets.</h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center col-md-6 p-0 gap-2">
          <div className="d-flex gap-2 w-100">
            <div className="coverage crypto">
              <h4>Crypto</h4>
            </div>
            <div className="coverage forex">
              <h4>Forex</h4>
            </div>
          </div>
          <div className="d-flex gap-2 w-100">
            <div className="coverage indices">
              <h4>Indices</h4>
            </div>
            <div className="coverage stocks">
              <h4>Stocks</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarketCoverage