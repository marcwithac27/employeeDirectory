import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.developers array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="developer">Developer Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="developer"
          list="developers"
          type="text"
          className="form-control"
          placeholder="Type in a git developer to begin"
          id="developer"
        />
        <datalist id="developers">
          {props.developers.map(developer => (
            <option value={developer} key={developer} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
