import React, { useEffect, useState } from "react";
import { GetDataQ4 } from "../Services/APIService.js";
import "../styles/Table.css";

const MatchCount = () => {

  const [q4, setq4] = useState([]);
  const [year, setYear] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const getDataQ4 = async () => {
      let data = await GetDataQ4(year);
      if (Array.isArray(data)) {
        setq4(data);
      } else {
        console.error("Invalid response from GetDataQ4");
      }
    };
    getDataQ4();
  }, [year]); // Changed input to year

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setYear(input);
  };

  return (

// Your form and table component code
<div className="container mt-5">
  <form className="form-group" onSubmit={onSubmit}>
    <div className="form-group">
      <label htmlFor="year">Year:</label>
      <input
        type="text"
        className="form-control"
        id="year"
        value={input}
        onChange={onChange}
      />
    </div>
    <button type="submit" className="btn btn-primary w-25 m-3" >
      Get detail
    </button>
  </form>

  <div className="container">
  <div className="row justify-content-center">
    <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Sponsor Name</th>
        <th>Number of matches</th>
      </tr>
    </thead>
    <tbody>
      {q4.map((p) => (
        <tr key={p.sponsorName}>
          <td>{p.sponsorName}</td>
          <td>{p.numberOfMatches}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>

</div>
  );
};

export default MatchCount;
