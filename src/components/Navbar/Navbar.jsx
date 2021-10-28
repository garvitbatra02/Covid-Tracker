    import React, { Component } from 'react'
    import navbarimg from "./../../images/Capture-removebg-preview.png"
    import "./Navbar.css"
  import { Link } from 'react-router-dom'
   
   export default class Navbar extends Component {
       render() {
           return (
               <div>
                   <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container">
    <a className="navbar-brand" href="abcd"><div className="logoimg"><img src={navbarimg} alt="img" />Covid Tracker</div></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/World">World</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Indiasummary">India Summary</Link>
        </li>
        
        
        <li className="nav-item">
          <Link className="nav-link" to="/statewise">StateWise</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/casesstats">Cases stats</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/vaccination">Vaccination stats</Link>
        </li>
      </ul>
 
    </div>
  </div>
</nav>
               </div>
           )
       }
   }
   