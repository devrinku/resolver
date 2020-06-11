import React, { useEffect } from "react";
import TechListItem from "./TechListItem";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techAction";
const TechList = ({ techs, getTechs }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list" className="modal">
      <div className="modal-content">
        <ul className="collection">
          {techs === null || techs.length === 0 ? (
            <li className="collection-item">There is no Technician</li>
          ) : (
            techs.map((tech) => <TechListItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  techs: state.tech.techs,
});
export default connect(mapStateToProps, { getTechs })(TechList);
