import React, { useState, useEffect } from "react";
import axios from "axios";
function DeleteUser(props) {
  useEffect(() => {
    const GetData = async () => {
      axios
        .delete("http://localhost:8080/users/" + props.match.params.id)
        .then(res => {
          props.history.push("/UserList");
        })
        .catch(response => {
          props.history.push("/UserList");
        });
    };
    GetData();
  }, []);
  return <div></div>;
}
export default DeleteUser;
