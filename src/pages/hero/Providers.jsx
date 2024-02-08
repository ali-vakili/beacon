import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";

import Binance from "./svg/Binance.svg"
import Kucoin from "./svg/Kucoin.svg"
import FXCM from "./svg/FXCM.svg"
import Gateio from "./svg/Gateio.svg"
import OANDA from "./svg/OANDA.svg"
import XTB from "./svg/XTB.svg"

const Providers = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    isSmallScreen ? 
    (
      <Marquee speed={24}>
        <img src={Binance} alt="binance-logo" className="provider-marquee" />
        <img src={Kucoin} alt="kucoin-logo" className="provider-marquee" />
        <img src={XTB} alt="xtb-logo" className="provider-marquee" />
        <img src={Gateio} alt="gate-io-logo" className="provider-marquee" />
        <img src={FXCM} alt="fxcm-logo" className="provider-marquee" />
        <img src={OANDA} alt="oanda-logo" className="provider-marquee" />
      </Marquee>
    ) : (
      <section className="providers section-beacon">
          <span className="provider">
            <img src={Binance} alt="binance-logo"/>
          </span>
          <span className="provider">
            <img src={Kucoin} alt="kucoin-logo"/>
          </span>
          <span className="provider">
            <img src={XTB} alt="xtb-logo"/>
          </span>
          <span className="provider">
            <img src={Gateio} alt="gate-io-logo"/>
          </span>
          <span className="provider">
            <img src={FXCM} alt="fxcm-logo"/>
          </span>
          <span className="provider">
            <img src={OANDA} alt="oanda-logo"/>
          </span>
      </section>
    )
  )
}

export default Providers