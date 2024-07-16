import React from 'react';

const Header = () => {
  return (
    <div className="sub-header">
     

      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <h1>Villa</h1>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li><a href="index.html" className="active">Home</a></li>
                  <li><a href="properties.html">Properties</a></li>
                  <li><a href="property-details.html">Property Details</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="#"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
                </ul>   
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
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
