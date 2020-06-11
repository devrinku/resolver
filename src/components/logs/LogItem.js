import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLogs, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLogs, setCurrent }) => {
  const onDelete = () => {
    deleteLogs(log.id);
    M.toast({ html: "Log Deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => setCurrent(log)}
          href="#edit-log"
          className={
            "pencil modal-trigger " +
            (log.attention === true ? "red-text" : "blue-text")
          }>
          {" "}
          {log.message}
        </a>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons">delete</i>
        </a>
        <br />
        <span className="black-text fw-600">
          ID #{log.id} {"  "} <span className="light">last updated by</span>{" "}
          {log.tech}{" "}
        </span>
        on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
      </div>
    </li>
  );
};

export default connect(null, { deleteLogs, setCurrent })(LogItem);
