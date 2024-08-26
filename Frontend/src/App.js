import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import MatchDetails from "./components/MatchDetails";
import PayDetails from "./components/PayDetails";
import Navigation from "./components/Navigation";
import AddPayment from "./components/AddPay";
import MatchCount from "./components/MatchCount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/Match-Details" element={<MatchDetails />} />
          <Route path="/Pay-Details" element={<PayDetails />} />
          <Route path="/Add-Payment" element={<AddPayment LoggedIn />} />
          <Route path="/Match-Count" element={<MatchCount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
