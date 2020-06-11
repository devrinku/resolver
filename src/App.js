import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLog from "./components/logs/AddLog";
import EditLog from "./components/logs/EditLog";
import AddTechs from "./components/techs/AddTechs";
import TechList from "./components/techs/TechList";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <Provider store={store}>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddBtn />
          <AddLog />
          <EditLog />
          <AddTechs />
          <TechList />
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
