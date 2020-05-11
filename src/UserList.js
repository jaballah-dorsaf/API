import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function UserList() {
  const [listOfUser, setlistOfUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setlistOfUser(res.data);
    });
  }, []);
  console.log(listOfUser);
  return (
    <div className="container-fluid row">
      <div className="col-6"></div>
      <table className="col-6">
        <tr className="form" key={0}>
          <th className="table" style={{ width: "50px" }}>
            <h3>ID</h3>
          </th>
          <th className="table" style={{ width: "250px" }}>
           <h3> Name</h3>
          </th>
          <th className="table" style={{ width: "250px" }}>
           <h3>UserName</h3>
          </th>
          <th className="table" style={{ width: "250px" }}>
            <h3>Email</h3>
          </th>
          <th className="table" style={{ width: "250px" }}>
            <h3>Phone</h3>
          </th>
          <th className="table" style={{ width: "250px" }}>
            <h3>Website</h3>
          </th>
          
        </tr>

        {listOfUser.map((el) => {
          return (
            <tr className="form" key={el.id}>
              <td className="table" style={{ width: "50px" }}>
                {el.id}
              </td>
              <td className="table" style={{ width: "250px" }}>
                {el.name}
              </td>
              <td className="table" style={{ width: "250px" }}>
                {el.username}
              </td>
              <td className="table" style={{ width: "250px" }}>
                {el.email}
              </td>
              <td className="table" style={{ width: "250px" }}>
                {el.phone}
              </td>
              <td className="table" style={{ width: "250px" }}>
                {el.website}
              </td>
              
            </tr>
          );
        })}
      </table>
      <div className="col-6"></div>
    </div>
  );
}