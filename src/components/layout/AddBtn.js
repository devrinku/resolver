import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#add-log" className="btn-floating red btn-large modal-trigger">
        <i className="material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href="#tech-list" className="btn-floating red modal-trigger">
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-tech" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add_alt_1</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
