import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import { Form, Button, Nav } from "react-bootstrap";
import ValidateRoleSite from "./validateRoleSite";
import Home from "./home";




function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onChange={onChange}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control type="text" placeholder="User Name" id="username" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" id="password" />
      </Form.Group>
  
        <Button variant="dark" onClick={performLogin}>Login</Button>
      </Form>
    </div>
  );
}
function LoggedIn(props) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    facade.fetchData().then((data) => {
      setDataFromServer(data.msg);
    });
  }, []);

  return (
    <></>
  );
}

function LoginComplete(props) {
  // const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    props.setLoggedIn(false);
    <Home/>
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => props.setLoggedIn(true));
  };

  return (
    <div>
      {!props.loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn loggedIn = {props.loggedIn}/>
          <Button href="/"variant="dark" onClick={logout}>Logout {facade.getUserName()}</Button>
        </div>
      )}
    </div>
  );
}
export default LoginComplete;
