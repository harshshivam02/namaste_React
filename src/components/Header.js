import { LOGO_URL } from "../utils/contents";  
import { useEffect,useState } from "react"; 
import {Link} from 'react-router-dom';
const Header = () => {
  const [btnName, setBtnName ]=useState("Login");
 
    return (
      <div className="Header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="nav-btn" onClick={()=>{
                if(btnName==="Login"){
                  setBtnName("Logout");
                }else{
                  setBtnName("Login");
                }
            }}>  {btnName} </button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;