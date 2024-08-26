import React, { useEffect, useState } from "react";
import { GetData } from "../Services/APIService.js";
import "../styles/Table.css";


const MatchDetails = () => {
  const [q2, setq2] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await GetData();
      if (data != null) { 
        setq2(data);
      }
    };
    getData();
  }, []);

  return (
    <>
      
  <div className="container">
  <div className="row justify-content-center">
    <table className="table table-striped table-bordered">
      <thead>
      <tr>
    <th>Match Name</th>
    <th>Match Date</th>
    <th>Location</th>
    <th>Amount Paid</th>
  </tr>  </thead>
  <tbody>
  {q2.map((p) => (
    <tr key={p.matchID} className="table-row">
      <td>{p.matchName}</td>
      <td>{p.matchDate}</td>
      <td>{p.location}</td>
      <td>{p.totalPayments}</td>
    </tr>
  ))}
  </tbody>
</table>
</div>
</div>
    </>
  );
};

export default MatchDetails;
