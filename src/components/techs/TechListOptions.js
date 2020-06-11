import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techAction";

const TechListOptions = ({ getTechs, techs }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  return (
    techs !== null &&
    techs.map((t) => (
      <option key={t.id}>
        {t.firstName} {t.lastName}{" "}
      </option>
    ))
  );
};
const mapStateToProps = (state) => ({
  techs: state.tech.techs,
});

export default connect(mapStateToProps, { getTechs })(TechListOptions);
