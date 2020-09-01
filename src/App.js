import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Createuser from "./Components/Createuser";
import UserList from "./Components/UserList";
import Edituser from "./Components/Edituser";
import DeleteUser from "./Components/DeleteUser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/Createuser"} className="navbar-brand">
                    Add User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/UserList"} className="navbar-brand">
                    User List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Switch>
            <Route exact path="/Createuser" component={Createuser} />
            <Route path="/edit/:id" component={Edituser} />
            <Route path="/delete/:id" component={DeleteUser} />
            <Route path="/UserList" component={UserList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
