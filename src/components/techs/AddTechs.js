import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTechs } from "../../actions/techAction";

const AddTechs = ({ addTechs }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onClick = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a firstname and lastname" });
    } else {
      const newTechnician = { firstName, lastName };
      addTechs(newTechnician);
      M.toast({ html: "Technician Added" });
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div id="add-tech" className="modal">
      <div className="modal-content">
        <h5>Enter Technician</h5>
        <div className="input-field">
          <input
            type="text"
            id="ist"
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            value={firstName}
          />
          <label htmlFor="ist">Enter Firstname</label>
        </div>

        <div className="input-field">
          <input
            id="sec"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            value={lastName}
          />
          <label htmlFor="sec">Enter Lastname</label>
        </div>
      </div>
      <div className="modal-footer">
        <a onClick={onClick} href="#!" className="btn modal-close">
          Enter
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addTechs })(AddTechs);
