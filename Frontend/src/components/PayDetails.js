import React, { useEffect, useState } from "react";
import { GetDataQ3 }  from "../Services/APIService.js";
import "../styles/Table.css";

const PayDetails = () => {
  const [q3, setq3] = useState([]);

  useEffect(() => {
    const getDataQ3 = async () => {
      let data = await GetDataQ3();
      if (Array.isArray(data)) {
        setq3(data);
      } else {
        console.error("Invalid response from GetDataQ3");
      }
    };
    getDataQ3();
  }, []);

  return (
    <>
<div className="container">
  <div className="row justify-content-center">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Sponsor Id</th>
          <th>Industry Type</th>
          <th>Last Pay</th>
          <th>total Payments</th>
          <th>Number of pay</th>
        </tr>
      </thead>
      <tbody>
        {q3.map((p) => (
          <tr key={p.sponsorID}>
            <td>{p.sponsorID}</td>
            <td>{p.sponsorName}</td>
            <td>{p.latestPaymentDate}</td>
            <td>{p.totalPayments}</td>
            <td>{p.numberOfPayments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </>
  );
};

export default PayDetails;
