import React, { useState, useEffect } from 'react';
import './presentation.css'

const Presentation = ({ presentation }) => {
  const{ presentations_title, title, textTitle, text, image, side } = presentation
  console.log(title, textTitle, text, image, side)
  return ( 
    <div className="presentation-content">
      <div className='presentation-title'>
        <h1 className='display-5 col-12'>
          {title}
        </h1>
      </div>

      <div className={`page-preview ${side==='left' && 'left'} row gx-0`}>
        <div className='page-preview-image col-6 col-sm-6 col-md-4'>
          <img className='preview-image col-12' src={image} alt={presentations_title} />
        </div>
        <div className='page-preview-about col-md-7'>
          <h2 className='page-preview-title'>{textTitle}</h2>
          <p className='page-preview-text fs-4'>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Presentation;