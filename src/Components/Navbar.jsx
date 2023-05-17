import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({auth}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h3>Noxe</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             {!auth ? <>
              <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tv">
                Tv
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/people">
                People
              </NavLink>
            </li>
             
             </> : null}
            
           
          </ul> 



            <ul className="navbar-nav  mb-2 mb-lg-0">
            
              
             
              {!auth ? 
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  Logout
                </NavLink>
              </li>
             : <> <li className="nav-item">
             <NavLink className="nav-link" to="/signin">
               SignIn
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/signup">
               SignUp
             </NavLink>
           </li></>}
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
}
