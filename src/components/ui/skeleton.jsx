import "../assets/css/skeleton.css";

const Skeleton = () => {
  return (
    <div className="coin-skeleton skeleton-beacon">
      <div className="coin coin-skeleton">
        <div className="coin-name skeleton">
          <div className="skeleton-image"></div>
          <div className="skeleton-name skeleton-cover"></div>
        </div>
        <div className="coin-price skeleton">
          <div className="skeleton-price skeleton-cover skeleton-small"></div>
        </div>
        <div className="coin-change change-1h skeleton">
          <div className="change-badge skeleton-cover skeleton-small"></div>
        </div>
        <div className="coin-change change-24h skeleton">
          <div className="change-badge skeleton-cover skeleton-small"></div>
        </div>
        <div className="coin-market-cap skeleton">
          <div className="skeleton-market-cap skeleton-cover skeleton-larg"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
