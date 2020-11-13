import React, { useState } from "react";
import facade from "./apiFacade";
import { AdminUrlUserCount } from "./../sites";
import { Form, Button } from "react-bootstrap";


const url = AdminUrlUserCount;

const AdminSite = () => {
  const [count, setCount] = useState("");
  
    const initialValue = {
      fname: "",
      password: ""
    };
    const [user, setUser] = useState(initialValue);

    const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      setUser({...user,[name]: value});
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      window.alert(JSON.stringify(user));
      facade.addUser(user.fname,user.password);
    }
  
  
  
  return (
    <>
      <p>Number of users on this site: {count}</p>
      <button
        onClick={() =>
          fetch(url, facade.makeOptions("GET", true))
            .then((res) => res.json())
            .then((data) => setCount(data))
        }
      >
      Hente antal bruger
      </button>
      <p></p>
      <h2>Add User</h2>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control name="fname" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit">Add Me</Button>

        
      </Form>
      <p>{JSON.stringify(user)}</p>
    </>
  );
};

export default AdminSite;

/*<input 
        name="fname" 
        placeholder="User Name" 
        />
        <br />
        <input 
        name="password" 
        placeholder="Password" 
        />
        <br />
        <button type="submit">Add Me</button>*/
