import React from "react";
import "./App.css";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import Createuser from "./createuser";
import User from "./user";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Edituser from "./edit-user";
import Profile from "./profile";


function App() {
  return (
    <>
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
            <Switch>
          <Route path="/" exact="true">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/user" exact="true">
          <User></User>
          </Route>
          <Route path="/create-user" exact="true">
          <Createuser></Createuser>
          </Route>
          <Route path="/edit-user/:id" component={Edituser} exact="true"/>
          <Route path="/profile/:id" component={Profile} exact="true"/>
          </Switch>
            </div>
          </div>
        </div>
      </div>
      </Router>
    </>
  );
}

export default App;
