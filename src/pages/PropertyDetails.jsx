import React from "react";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb">
                <Link to="#">Home</Link> / Single Property
              </span>
              <h3>Single Property</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-image">
                <img src="assets/images/single-property.jpg" alt="" />
              </div>
              <div className="main-content">
                <span className="category">Apartment</span>
                <h4>24 New Street Miami, OR 24560</h4>
                <p>
                  Get <strong>the best villa agency</strong> HTML CSS Bootstrap
                  Template for your company website. TemplateMo provides you the{" "}
                  <a
                    href="https://www.google.com/search?q=best+free+css+templates"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    best free CSS templates
                  </a>{" "}
                  in the world. Please tell your friends about it. Thank you.
                  Cloud bread kogi bitters pitchfork shoreditch tumblr yr
                  succulents single-origin coffee schlitz enamel pin you
                  probably haven't heard of them ugh hella.
                  <br />
                  <br />
                  When you look for free CSS templates, you can simply type
                  TemplateMo in any search engine website. In addition, you can
                  type TemplateMo Digital Marketing, TemplateMo Corporate
                  Layouts, etc. Master cleanse +1 intelligentsia swag
                  post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine
                  neutra cardigan hoodie pop-up.
                </p>
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
                      Dolor <strong>almesit amet</strong>, consectetur
                      adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx
                      seitan crucifix 3 wolf moon bicycle rights keffiyeh
                      snackwave wolf same vice, chillwave vexillologist
                      incididunt ut labore consectetur <code>adipiscing</code>{" "}
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
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
                      adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx
                      seitan crucifix 3 wolf moon bicycle rights keffiyeh
                      snackwave wolf same vice, chillwave vexillologist
                      incididunt ut labore consectetur <code>adipiscing</code>{" "}
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
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
                      Why is Villa the best ?
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
                      adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx
                      seitan crucifix 3 wolf moon bicycle rights keffiyeh
                      snackwave wolf same vice, chillwave vexillologist
                      incididunt ut labore consectetur <code>adipiscing</code>{" "}
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-table">
                <ul>
                  <li>
                    <img
                      src="assets/images/info-icon-01.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      450 m2
                      <br />
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
                      Contract
                      <br />
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
                      Payment
                      <br />
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
                      Safety
                      <br />
                      <span>24/7 Under Control</span>
                    </h4>
                  </li>
                </ul>
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
                  <div className="nav-wrapper">
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
                          Penthouse
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="appartment"
                      role="tabpanel"
                      aria-labelledby="appartment-tab"
                    >
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>
                                Total Flat Space <span>185 m2</span>
                              </li>
                              <li>
                                Floor number <span>26th</span>
                              </li>
                              <li>
                                Number of rooms <span>4</span>
                              </li>
                              <li>
                                Parking Available <span>Yes</span>
                              </li>
                              <li>
                                Payment Process <span>Bank</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img
                            src="assets/images/deal-01.jpg"
                            alt="Apartment Deal"
                          />
                        </div>
                        <div className="col-lg-3">
                          <h4>Extra Info About Property</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. <br />
                            <br />
                            When you need free CSS templates, you can simply
                            type TemplateMo in any search engine website. In
                            addition, you can type TemplateMo Portfolio,
                            TemplateMo One Page Layouts, etc.
                          </p>
                          <div className="icon-button">
                            <a href="property-details.html">
                              <i className="fa fa-calendar"></i> Schedule a
                              visit
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
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>
                                Total Flat Space <span>250 m2</span>
                              </li>
                              <li>
                                Floor number <span>26th</span>
                              </li>
                              <li>
                                Number of rooms <span>5</span>
                              </li>
                              <li>
                                Parking Available <span>Yes</span>
                              </li>
                              <li>
                                Payment Process <span>Bank</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img
                            src="assets/images/deal-02.jpg"
                            alt="Villa Deal"
                          />
                        </div>
                        <div className="col-lg-3">
                          <h4>Detail Info About Villa</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. <br />
                            <br />
                            Swag fanny pack lyft blog twee. JOMO ethical copper
                            mug, succulents typewriter shaman DIY kitsch twee
                            taiyaki fixie hella venmo after messenger poutine
                            next level humblebrag swag franzen.
                          </p>
                          <div className="icon-button">
                            <a href="property-details.html">
                              <i className="fa fa-calendar"></i> Schedule a
                              visit
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
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>
                                Total Flat Space <span>320 m2</span>
                              </li>
                              <li>
                                Floor number <span>34th</span>
                              </li>
                              <li>
                                Number of rooms <span>6</span>
                              </li>
                              <li>
                                Parking Available <span>Yes</span>
                              </li>
                              <li>
                                Payment Process <span>Bank</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img
                            src="assets/images/deal-03.jpg"
                            alt="Penthouse Deal"
                          />
                        </div>
                        <div className="col-lg-3">
                          <h4>Extra Info About Penthouse</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. <br />
                            <br />
                            Swag fanny pack lyft blog twee. JOMO ethical copper
                            mug, succulents typewriter shaman DIY kitsch twee
                            taiyaki fixie hella venmo after messenger poutine
                            next level humblebrag swag franzen.
                          </p>
                          <div className="icon-button">
                            <a href="property-details.html">
                              <i className="fa fa-calendar"></i> Schedule a
                              visit
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
    </div>
  );
};

export default PropertyDetails;
