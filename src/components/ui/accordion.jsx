import { useState } from "react";
import "../assets/css/accordion.css"

const Accordion = ({ title, description }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="beacon-accordion pb-2 mb-3">
      <button onClick={() => setAccordionOpen(!accordionOpen)} className="accordion-control d-flex align-items-center justify-content-between w-100">
        <span className={`accordion-title ${accordionOpen && "accordion-expand"}`}>{title}</span>
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke={`${accordionOpen ? "white" : "#9F9F9F"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`chevron ${accordionOpen && "chevron-expand"}`}/>
          </svg>
        </span>
      </button>
      <div style={{maxHeight: accordionOpen ? "250px" : "0", opacity: accordionOpen ? "1" : "0"}} className="description pt-2">
        <p className="overflow-hidden accordion-description m-0">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Accordion