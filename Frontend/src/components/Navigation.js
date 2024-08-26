import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">MySite</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/" className="navbar-item button-link">Home</Link></li>
        <li><Link to="/Add-Payment" className="navbar-item button-link" >Add Payment</Link></li>
        <li><Link to="/Match-Details" className="navbar-item button-link" >Match Details</Link></li>
        <li><Link to="/Pay-Details" className="navbar-item button-link" >Pay Details</Link></li>
        <li><Link to="/Match-Count" className="navbar-item button-link" >Match Count</Link></li>
      </ul>
    </nav>
  );
}
