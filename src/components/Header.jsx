import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Header = () => {
  return (
    <div>
      <div className="sub-header">
       
      </div>
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <Link to="/" className="logo">
                  <h1>Villa</h1>
                </Link>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/properties">Properties</Link>
                  </li>
                  <li>
                    <Link to="/property-details">Property Details</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/schedule-visit">
                      <i className="fa fa-calendar"></i> Schedule a visit
                    </Link>
                  </li>
                </ul>
                {/* ***** Menu End ***** */}
                <Link className="menu-trigger">
                  <span>Menu</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
    </div>
  );
};

export default Header;
