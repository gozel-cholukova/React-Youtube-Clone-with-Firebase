import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon className="tune"/>
        <h2>FILTER</h2>
      </div>
    </div>
  )
}

export default SearchPage;
