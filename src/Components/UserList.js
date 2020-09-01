import React from "react";
import axios from "axios";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";
import { useState, useEffect } from "react";
function UserList(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const result = await axios("http://localhost:8080/users");
      setData(result.data);
    };
    GetData();
  }, []);
  /*
  const deleteuser = id => {
    debugger;
    axios
      .delete("http://localhost:8080/users/" + id)
      .then(res => {
        props.history.push("/UserList");
      })
      .catch(response => {
        props.history.push("/UserList");
      });
  };
  */
  const deleteuser = id => {
    props.history.push({
      pathname: "/delete/" + id
    });
  };

  const edituser = id => {
    props.history.push({
      pathname: "/edit/" + id
    });
  };
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> User List
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, idx) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>
                          <div class="btn-group">
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                edituser(user.id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                deleteuser(user.id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default UserList;
