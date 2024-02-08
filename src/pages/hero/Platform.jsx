import { journeys } from "../../constants/journeys"

import "./platform.css"

const Platform = () => {
  return (
    <div className="content d-flex flex-column align-items-center w-100">
      <h5 className="title">Who its for</h5>
      <h2 className="content-title" style={{fontWeight: "700"}}>One platform, multiple journeys</h2>
      <h3 className="content-title d-none" style={{fontWeight: "700"}}>One platform,<br/> multiple journeys</h3>
      <div className="journeys w-100">
        {journeys.map(({ id, title, description, color, options }) => (
          <div key={id} className="journey">
            <div className="journey-subjects">
              <div>
                <h2 className="journey-title" style={{ color }}>{title}</h2>
                <h5 className="journey-sub-title">{description}</h5>
              </div>
              <a href="#" style={{ color }} className="start-coverage-mobile d-flex align-items-center gap-1">
                Start Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            <div className="options">
              {options.map(({ id, option }) => (
                <div key={id} className="option">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18C9.5 18 9 17.8 8.6 17.4L4.6 13.4C3.8 12.6 3.8 11.4 4.6 10.6C5.4 9.8 6.7 9.8 7.4 10.6L10 13.2L16.6 6.6C17.4 5.8 18.6 5.8 19.4 6.6C20.2 7.4 20.2 8.6 19.4 9.4L11.4 17.4C11 17.8 10.5 18 10 18Z" fill={color}/>
                  </svg>
                  <h4 className="m-0">{option}</h4>
                </div>
              ))}
            </div>
            <a href="#" style={{ color }} className="start-coverage d-flex align-items-center gap-1">
              Start Now
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Platform