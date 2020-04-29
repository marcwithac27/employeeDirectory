import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <img alt="Losers will Dislay here on this broken Image" src={props.results} className="img-fluid" />
    </ul>
  );
}

export default SearchResults;
