import React, { useState } from "react";
import { AddPayment } from "../Services/APIService.js";
import "../styles/AddPay.css";

const AddPay = (props) => {
  // const log = useContext(LogContext)

  const [payment, setPayment] = useState({
    contractID: "",
    paymentDate: "",
    amountPaid: "",
    paymentStatus: "",
  });
  const createPayment = async () => {
    await AddPayment(payment);
  };
  const validate = (e) => {
    e.preventDefault();
    if (
      e.target.contractID.value === "" ||
      e.target.paymentDate.value === "" ||
      e.target.amountPaid.value === "" ||
      e.target.paymentStatus.value === ""
    ) {
      alert("please fill all valid data");
      return false;
    } else if (
      e.target.paymentStatus.value !== "Completed" &&
      e.target.paymentStatus.value !== "Pending"
    ) {
      alert(
        "Please enter valid payment status  .......  either pending or Completed"
      );
      return false;
    } else {
      createPayment();
    }
  };

  const onChange = (e) => {
    setPayment({ ...payment, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form className="form-group container" onSubmit={validate}>
        <div className="form-group">
          <label htmlFor="contractid">ID:</label>
          <input
            type="number"
            className="form-control"
            id="contractID"
            value={payment.contractID}
            onChange={onChange}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentdate">Payment Date:</label>
          <input
            type="Date"
            className="form-control"
            id="paymentDate"
            value={payment.paymentDate}
            onChange={onChange}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amountpaid">Price:</label>
          <input
            type="number"
            className="form-control"
            id="amountPaid"
            value={payment.amountPaid}
            onChange={onChange}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentstatus">Payment Status:</label>
          <input
            type="text"
            className="form-control"
            id="paymentStatus"
            value={payment.paymentStatus}
            onChange={onChange}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary m-2 p-2 w-25"
          style={{ borderRadius: "10px" }}
        >
          Add Payment
        </button>
      </form>
    </>
  );
};

export default AddPay;
