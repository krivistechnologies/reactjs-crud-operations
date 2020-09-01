import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row
} from "reactstrap";
function Createuser(props) {
  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:8080/users";
  const Insertuser = e => {
    e.preventDefault();
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };
    axios
      .post("http://localhost:8080/users", userData)
      .then(res => {
        props.history.push("/UserList");
      })
      .catch(response => {
        props.history.push("/UserList");
      });
  };
  const onChange = e => {
    e.persist();
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={Insertuser}>
                  <h1>Register</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="firstName"
                      name="firstName"
                      id="firstName"
                      value={user.firstName}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="lastName"
                      name="lastName"
                      id="lastName"
                      value={user.lastName}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="email"
                      name="email"
                      id="email"
                      value={user.email}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Save</span>
                        </Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button className="btn btn-info mb-1" block>
                          <span>Cancel</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Createuser;
