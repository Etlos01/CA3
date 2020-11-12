import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import Login from "./login";
import DailyFun from "./dailyFun";
import Home from "./home";
import Readme from "./readMe";
import facade from "./apiFacade";
import ValidateRoleSite from "./validateRoleSite";
import UserSite from "./userSite";
import AdminSite from "./adminSite";
import Dogs from "./dogs";

const NavBarIO = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Header loggedIn={loggedIn} />
        <div>
          <Content setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </div>
      </Router>
    </>
  );
};

const Header = (props) => {
  return (
    <>
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand className="order-md-0 order-1" as={Link} to="/">
            Andreas Andersen CA-3
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="order-md-1 order-0" id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavItem href="/">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem href="/Dogs">
                <Nav.Link as={Link} to="/Dogs">
                  Dogs
                </Nav.Link>
              </NavItem>
              <NavItem href="/DailyFun">
                <Nav.Link as={Link} to="/DailyFun">
                  DailyFun
                </Nav.Link>
              </NavItem>
              <ValidateRoleSite loggedIn={props.loggedIn} />
            </Nav>          
            <Nav>
              <DropdownButton menuAlign={{ lg: 'right' }} title={<IsLoggedIn loggedIn={props.loggedIn}/>}>
              <Login setLoggedIn={props.setLoggedIn} loggedIn={props.loggedIn}/>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

const Content = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Readme" component={Readme} />
      <Route path="/Dogs" component={Dogs} />
      <Route path="/DailyFun" component={DailyFun} />
      <Route path="/AdminSite" component={AdminSite} />
      <Route path="/UserSite" component={UserSite} />
      <Route path="/Login">
        <Login setLoggedIn={props.setLoggedIn} loggedIn={props.loggedIn} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

const NoMatch = () => {
  return <p>There was no match</p>;
};

const IsLoggedIn = (props) => {
  if (props.loggedIn) {
    const userName = facade.getUserName();
    console.log("IsLoggedIn(), ", userName);
    return <>{userName}</>;
  } else {
    return <>Login</>;
  }
};

export default NavBarIO;


/*<NavItem href="/Login">
                <Nav.Link as={Link} to="/Login">
                  <IsLoggedIn loggedIn={props.loggedIn} />
                </Nav.Link>
              </NavItem>*/