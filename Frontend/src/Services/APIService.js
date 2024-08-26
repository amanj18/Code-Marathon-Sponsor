import axios from "axios";

const response = 'http://localhost:5251/api/employee';

const AddPayment = async (payment) => {
  const URL = `${response}`;
    await axios
      .post(URL, payment)
      .then(() => {
        alert("Payment created successfully");
      })
      .catch((err) => {
        alert("Error 400: Bad Request. Please check your input data.");
      });
};


async function GetData() {
    const URL =  `${response}/match-payment-summary`;
    let data = null;
    try {
        let response = await axios.get(URL);
        if ( response.data !== null) {
            data = await response.data
        }
    }
    catch (error) {
        return JSON.stringify(error)
    }
    return data;

}

async function GetDataQ3() {
    const url =  `${response}/payment-summary`;
    let data = null;
    try {
        let response = await axios.get(url);
        if ( response.data !== null) {
            data = await response.data
        }
    }
    catch (error) {
        return JSON.stringify(error)
    }
    return data;

}

async function GetDataQ4(year) {
    const url = `${response}/matches-count?year=${year}`;
    let data = null;
    try {
      let response = await axios.get(url);
      if (response.data !== null) {
        data = await response.data;
        console.log("Data from api" + JSON.stringify(data));
      }
    } catch (error) {
      return JSON.stringify(error);
    }
    return data;
  }



export  {AddPayment , GetData , GetDataQ3 , GetDataQ4};
