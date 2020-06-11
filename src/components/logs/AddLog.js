import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLogs } from "../../actions/logActions";
import TechListOptions from "../techs/TechListOptions";

const AddLog = ({ addLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onClick = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and a tech" });
    } else {
      const newLog = {
        date: Date.now(),
        message,
        tech,
        attention,
      };
      addLogs(newLog);
      M.toast({ html: "Log Added" });
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div id="add-log" className="modal">
      <div className="modal-content">
        <h4>Enter a new Log</h4>
        <div className="input-field">
          <input
            type="text"
            value={message}
            name="message"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <label htmlFor="message">Message</label>
        </div>

        <div className="input-field">
          <select
            name="tech"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="browser-default">
            <option disabled value="">
              Select a tech
            </option>
            <TechListOptions />
          </select>
        </div>
        <p>
          <label>
            <input
              type="checkbox"
              value={attention}
              onChange={() => setAttention(!attention)}
              checked={attention === true}
            />
            <span>Requires Attention</span>
          </label>
        </p>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onClick} className="btn modal-close ">
          Enter
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addLogs })(AddLog);
