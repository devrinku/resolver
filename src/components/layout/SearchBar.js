import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");
  const onChange = (e) => {
    searchLogs(e.target.value);
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input ref={text} onChange={onChange} type="search" id="serach" />
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, { searchLogs })(SearchBar);
