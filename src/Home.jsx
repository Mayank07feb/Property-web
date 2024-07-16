import React from "react";

const Home = () => {
  return (
    <div>
      <div className="main-banner">
        <div className="owl-carousel owl-banner">
          <div className="item item-1">
            <div className="header-text">
              <span className="category">
                Toronto, <em>Canada</em>
              </span>
              <h2>Hurry! Get the Best Villa for you</h2>
            </div>
          </div>
          <div className="item item-2">
            <div className="header-text">
              <span className="category">
                Melbourne, <em>Australia</em>
              </span>
              <h2>
                Be Quick! <br />
                Get the best villa in town
              </h2>
            </div>
          </div>
          <div className="item item-3">
            <div className="header-text">
              <span className="category">
                Miami, <em>South Florida</em>
              </span>
              <h2>
                Act Now! <br />
                Get the highest level penthouse
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="featured section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image">
                <img src="assets/images/featured.jpg" alt="" />
                <a href="property-details.html">
                  <img
                    src="assets/images/featured-icon.png"
                    alt=""
                    style={{ maxWidth: "60px", padding: "0px" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-heading">
                <h6>| Featured</h6>
                <h2>Best Apartment & Sea view</h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Best useful links ?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Get <strong>the best villa</strong> website template in
                      HTML CSS and Bootstrap for your business. TemplateMo
                      provides you the{" "}
                      <a
                        href="https://www.google.com/search?q=best+free+css+templates"
                        target="_blank"
                      >
                        best free CSS templates
                      </a>{" "}
                      in the world. Please tell your friends about it.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How does this work ?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur
                      adipiscing elit, sed doesn't eiusmod tempor incididunt ut
                      labore consectetur <code>adipiscing</code> elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Why is Villa Agency the best ?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur
                      adipiscing elit, sed doesn't eiusmod tempor incididunt ut
                      labore consectetur <code>adipiscing</code> elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="info-table">
                <ul>
                  <li>
                    <img
                      src="assets/images/info-icon-01.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      250 m2 <br />
                      <span>Total Flat Space</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src="assets/images/info-icon-02.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      Contract <br />
                      <span>Contract Ready</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src="assets/images/info-icon-03.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      Payment <br />
                      <span>Payment Process</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src="assets/images/info-icon-04.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      Safety <br />
                      <span>24/7 Under Control</span>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Video View |</h6>
                <h2>Get Closer View & Different Feeling</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="video-frame">
                <img src="assets/images/video-frame.jpg" alt="" />
                <a href="https://youtube.com" target="_blank">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2
                        className="timer count-title count-number"
                        data-to="34"
                        data-speed="1000"
                      ></h2>
                      <p className="count-text ">
                        Buildings <br />
                        Finished Now
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2
                        className="timer count-title count-number"
                        data-to="12"
                        data-speed="1000"
                      ></h2>
                      <p className="count-text ">
                        Years <br />
                        Experience
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2
                        className="timer count-title count-number"
                        data-to="24"
                        data-speed="1000"
                      ></h2>
                      <p className="count-text ">
                        Awards <br />
                        Won 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section best-deal">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6>| Best Deal</h6>
                <h2>Find Your Best Deal Right Now!</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper ">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="appartment-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#appartment"
                          type="button"
                          role="tab"
                          aria-controls="appartment"
                          aria-selected="true"
                        >
                          Apartment
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="villa-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#villa"
                          type="button"
                          role="tab"
                          aria-controls="villa"
                          aria-selected="false"
                        >
                          Villa House
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="penthouse-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#penthouse"
                          type="button"
                          role="tab"
                          aria-controls="penthouse"
                          aria-selected="false"
                        >
                          Pent House
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="office-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#office"
                          type="button"
                          role="tab"
                          aria-controls="office"
                          aria-selected="false"
                        >
                          Office
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="appartment"
                      role="tabpanel"
                      aria-labelledby="appartment-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-image">
                            <img src="assets/images/tab-image-01.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-content">
                            <h4>Best Apartment & Sea View</h4>
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa fa-check"></i> Lorem ipsum
                                dolor sit amet
                              </li>
                              <li>
                                <i className="fa fa-check"></i> Consectetur
                                adipiscing elit
                              </li>
                              <li>
                                <i className="fa fa-check"></i> Integer molestie
                                lorem at massa
                              </li>
                            </ul>
                            <a
                              href="property-details.html"
                              className="filled-button"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="villa"
                      role="tabpanel"
                      aria-labelledby="villa-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-image">
                            <img src="assets/images/tab-image-02.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-content">
                            <h4>Best Villa House & Sea View</h4>
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa fa-check"></i> Lorem ipsum
                                dolor sit amet
                              </li>
                              <li>
                                <i className="fa fa-check"></i> Consectetur
                                adipiscing elit
                              </li>
                              <li>
                                <i className="fa fa-check"></i> Integer molestie
                                lorem at massa
                              </li>
                            </ul>
                            <a
                              href="property-details.html"
                              className="filled-button"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="penthouse"
                      role="tabpanel"
                      aria-labelledby="penthouse-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-image">
                            <img src="assets/images/tab-image-03.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-content">
                            <h4>Best Pent House & Sea View</h4>
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa fa-check"></i> Lorem ipsum
                                dolor sit amet
                              </li>
                              <li>
                                <i className="fa fa-check"></i> Consectetur
                                adipiscing elit
                              </li>
                              <li>
                                <i className="fa fa-check"></i> Integer molestie
                                lorem at massa
                              </li>
                            </ul>
                            <a
                              href="property-details.html"
                              className="filled-button"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="office"
                      role="tabpanel"
                      aria-labelledby="office-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-image">
                            <img src="assets/images/tab-image-04.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-content">
                            <h4>Best Office & Sea View</h4>
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa fa-check"></i> Lorem ipsum
                                dolor sit amet
                              </li>
                              <li>
                                <i className="fa fa-check"></i> Consectetur
                                adipiscing elit
                              </li>
                              <li>
                                <i className="fa fa-check"></i> Integer molestie
                                lorem at massa
                              </li>
                            </ul>
                            <a
                              href="property-details.html"
                              className="filled-button"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="section-heading text-center">
            <h6>| Contact Us</h6>
            <h2>Get In Touch With Our Agents</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <div className="row">
                  
                  <div className="col-lg-4">
                    <div className="solid-button">
                      <a href="tel:00123456789">Click Here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                  width="100%"
                  height="500px"
                  frameborder="0"
                  style={{
                    border: "0",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
                  }}
                  allowfullscreen=""
                ></iframe>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="item phone">
                    <img
                      src="assets/images/phone-icon.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h6>
                      010-020-0340
                      <br />
                      <span>Phone Number</span>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item email">
                    <img
                      src="assets/images/email-icon.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h6>
                      info@villa.co
                      <br />
                      <span>Business Email</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Your Name..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your E-mail..."
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="subject"
                        name="subject"
                        id="subject"
                        placeholder="Subject..."
                        autoComplete="on"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message"
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="orange-button"
                      >
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
