import React, { useState } from "react";
import '../assets/css/search.css'

const Search = ({ get }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value.trim());
  }

  return ( 
    <div className="serach-container search-beacon">
      <div className="row gx-0 justify-content-center">
        <div className="search">
          <input className="search-input" placeholder="Coin Name" value={value} onChange={handleChange} />
          <button className="search-button btn btn-lg" onClick={() => get(value.toLowerCase() ,value)}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;