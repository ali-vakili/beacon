import CountUp from 'react-countup';
import { useState } from 'react';
import { motion } from "framer-motion"
import { statistics } from "../../constants/statistics"

import quote from "./svg/quote.svg"

import "./statistics.css"

const Statistics = () => {
  const [startCounters, setStartCounters] = useState(false);

  return (
    <>
      <img className="quote mx-auto" width={64} height={64} style={{maxWidth: "100%", height: "auto"}} src={quote} alt="quote" loading="lazy"/>
      <motion.p 
      initial={{ visibility: "hidden", y: 30, opacity: 0 }}
      whileInView={{ visibility: "visible", y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        ease: "easeIn",
        duration: 2,
      }}
      className="text"
      >
        Our goal is to equip traders and investors with practical insights, facilitating intelligent trading choices through the most extensive trading assistant in the world.
      </motion.p>
      <motion.div className="numbers w-100 mb-3 row" whileInView={() => setStartCounters(true)} viewport={{ once: true }}>
        {statistics.map(({ id, subject, start, end, symbol }) => (
          startCounters && (
            <div className="statistic col-6">
              <div className='count-up'>
                <CountUp key={id} className='number' start={start} end={end} duration={4}/>
                <span className='number'>{symbol}</span>
              </div>
              <h4 className="subject">{subject}</h4>
            </div>
          )
        ))}
      </motion.div>
    </>
  )
}

export default Statistics