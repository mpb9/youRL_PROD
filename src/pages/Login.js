import React, { useState } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import NotLoggedIn from "../helpers/NotLoggedIn";

// pointless rn
const PATH = "http://localhost/mediashared/src/user-apis/userlogin.php";

function Login() {

  const [inputs, setInputs] = useState({
    name: '',
    password: '',
    access: false,
    loggedin: 'Nope',
    signup: false
  });


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const LoginHandler = (event)  => {    
    event.preventDefault();
    /*
    axios({
    method: "post",
    url: `${PATH}`,
    headers: { "content-type": "application/json" },
    data: inputs
    })
    .then((result) => {
      console.log(result.data);
      
      const name = 'loggedin';
      const value = result.data;
      setInputs(values => ({...values, [name]: value}))
      inputs.access = true;    
    })
    .catch((error) => {
      const name = 'error';
      const value = error.message;
      setInputs(values => ({...values, [name]: value}))
    });*/
    
  }

   
    
  
      return(
        <Container fluid id='bigcontainer'>
          <Row fluid="true" id='navrow'>
            <Col xs={3} style={{margin:'auto', textAlign:'center'}}>
            </Col>
            <Col xs={6} style={{textAlign: 'center'}}>
                <h2>youRL</h2>
            </Col>
            <Col xs={3} style={{textAlign: 'right'}}>
            </Col>
          </Row>
          <Row fluid="true" id='bigrow'>
            <Col xs={9} id='medcol'>
              <NotLoggedIn />
            </Col>
            <Col xs={3} id='profile'>
              <h4>Log In</h4>
              <form action="#">
                <label>Username</label>
                <input
                  type="text"
                  id="newUserInput"
                  name="name"
                  placeholder="Enter your name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                />
                <br />
                <label>Password</label>
                <input
                  type="password"
                  id="newUserInput"
                  name="password"
                  placeholder="Enter your password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                ></input>
                <br/>
                <br/>
                <input type="submit" id="postBut" value="Log In" onClick={LoginHandler}
                />
              </form> 
              <br/>
              
            </Col>      
          </Row>     
        </Container>
      );  
    
  
}

export default Login;