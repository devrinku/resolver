import React, { useEffect } from "react";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import { connect } from "react-redux";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { loading, logs }, getLogs }) => {
  useEffect(() => {
    getLogs();

    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  } else {
    return !loading && logs.length === 0 ? (
      <h3 className="text-center">No Logs to show....</h3>
    ) : (
      <ul className="collection with-header my-2">
        <li className="collection-header">
          <h4 className="text-center">System Logs</h4>
        </li>
        {logs.map((log) => (
          <LogItem log={log} key={log.id} />
        ))}
      </ul>
    );
  }
};
const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
