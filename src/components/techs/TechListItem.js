import React from "react";
import { connect } from "react-redux";
import { deleteTechs } from "../../actions/techAction";
import M from "materialize-css/dist/js/materialize.min.js";

const TechListItem = ({ tech, deleteTechs }) => {
  const onClick = () => {
    deleteTechs(tech.id);
    M.toast({ html: "Technician Deleted" });
  };
  return (
    <li className="collection-item">
      {tech.firstName} {tech.lastName}
      <a href="#!" onClick={onClick} className="secondary-content">
        <i className="material-icons">delete</i>
      </a>
    </li>
  );
};

export default connect(null, { deleteTechs })(TechListItem);
