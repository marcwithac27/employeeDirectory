import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <img alt="Dog" src={props.results} className="img-fluid" />
    </ul>
  );
}

export default SearchResults;
