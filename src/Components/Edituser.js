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
function Edituser(props) {
  const [user, setuser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: ""
  });
  const Url = "http://localhost:8080/users/" + props.match.params.id;
  debugger;
  useEffect(() => {
    const GetData = async () => {
      const result = await axios(Url);
      setuser(result.data);
    };
    GetData();
  }, []);

  const UpdateUser = e => {
    debugger;
    e.preventDefault();
    const data = {
      id: props.match.params.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };
    axios.post("http://localhost:8080/users", data).then(result => {
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
                <Form onSubmit={UpdateUser}>
                  <h1>Update User</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="firstName"
                      value={user.firstName}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="last name"
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
export default Edituser;
