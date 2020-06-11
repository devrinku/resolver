import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLogs } from "../../actions/logActions";
import { connect } from "react-redux";
import TechListOptions from "../techs/TechListOptions";
const EditLog = ({ current, updateLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onClick = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and a tech" });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: Date.now(),
      };
      updateLogs(updatedLog);
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div id="edit-log" className="modal">
      <div className="modal-content">
        <h4>Enter a new Log</h4>
        <div className="input-field">
          <input
            type="text"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
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
const mapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(mapStateToProps, { updateLogs })(EditLog);
