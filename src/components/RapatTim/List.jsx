import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default function List() {
  const [rapatTim, setRapatTim] = useState([]);
  useEffect(() => {
    axios
      .get("https://uts-if-3-b-2327250024-api.vercel.app/api/api/meetings")
      .then((response) => {
        console.log(response.data.result);
        setRapatTim(response.data.result);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);
  return (
    <>
      <h2>List Meeting Tim</h2>
      <NavLink to="/meeting/create" className="btn btn-primary mb-3">
        Create
      </NavLink>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Team 1</th>
            <th scope="col">Team 2</th>
          </tr>
        </thead>
        <tbody>
          {rapatTim.map((data) => (
            <tr key={data.id}>
              <td>{data.tim_1}</td>
              <td>{data.tim_2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
