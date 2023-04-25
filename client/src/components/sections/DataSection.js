import React, { useState, useRef, useEffect } from "react";


import EmbedSDKInit from "../common/EmbedInit";


import { Col, Container, Row } from "react-bootstrap";

import EmbedDashboard2 from "../EmbedDashboard/EmbedDashboard2";
import EmbedDashboard3 from "../EmbedDashboard/EmbedDashboard3";
import EmbedDashboard4 from "../EmbedDashboard/EmbedDashboard4";

import Vis from "../EmbedDashboard/VizComponent.js";

import AOS from "aos";
import "aos/dist/aos.css";

const ProcessContent = [
  {
    num: 1,
    className: "numb tran3s",
    heading: "Minim Veniam",
    desc:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    dataDelay: "",
  },
  {
    num: 2,
    className: "numb tran3s",
    heading: "Minim Veniam",
    desc:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    dataDelay: "50",
  },
  {
    num: 3,
    className: "numb tran3s",
    heading: "Minim Veniam",
    desc:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    dataDelay: "100",
  },
];

function DataSection() {
  EmbedSDKInit();

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [navbar, setNavbar] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState();
  const [dashboard, setDashboard] = useState();

  const toggleMenu = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", toggleMenu);

  return (
    <Container fluid>
      <div className="theme-inner-banner" id="services">
        <Container>
          <h2 class="intro-title text-center">Data Science</h2>
          <ul class="page-breadcrumb style-none d-flex justify-content-center"></ul>
        </Container>
        <img src="./images/shape_38.svg" alt="" class="shapes shape-one" />
        <img src="./images/shape_39.svg" alt="" class="shapes shape-two" />
      </div>

      <div className="fancy-feature-nineteen position-relative mb-5">
        <Container className="mb-5">
          <Row>
            <Col sm={12} md={12} lg={12}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>

          <Row>
            <div className="position-relative">

              <div className="dropdownMenu">

              </div>
              <Col sm={12} md={12} lg={12} className="embed-responsive embed-responsive-16by9 small">


                <EmbedDashboard2
                />
                <div className="abso"></div>
              </Col>
            </div>
          </Row>



          <Row>
            <Col sm={12} md={12} lg={12}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>

          <Row>
            <div className="position-relative">

              <div className="dropdownMenu">

              </div>
              <Col sm={12} md={12} lg={12} className="embed-responsive embed-responsive-16by9 small">


                <EmbedDashboard3
                />
                <div className="abso"></div>
              </Col>
            </div>
          </Row>



                    <Row>
                      <Col sm={12} md={12} lg={12}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </Col>
                    </Row>

                    <Row>
                      <div className="position-relative">

                        <div className="dropdownMenu">

                        </div>
                        <Col sm={12} md={12} lg={12} className="embed-responsive embed-responsive-16by9 small">


                          <EmbedDashboard4
                          />
                          <div className="abso"></div>
                        </Col>
                      </div>
                    </Row>




          <Row>
            <Col sm={12} md={12} lg={12}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>

          <Row>
            <div className="position-relative">

              <div className="dropdownMenu">

              </div>
              <Col sm={12} md={12} lg={12} className="embed-responsive embed-responsive-16by9">


                <EmbedDashboard2
                />
                <div className="abso"></div>
              </Col>
            </div>
          </Row>
        </Container>

        <div className="shapes oval-one" />
        <div className="shapes oval-two" />
        {/*<img src="./images/shape_35.svg" alt="" className="shapes bg-shape"/>*/}
      </div>

      <div className="fancy-short-banner-five mt-5">
        <div className="container">
          <div className="bg-wrapper">
            <div className="row align-items-center">
              <div
                className="col-lg-6 text-center text-lg-start"
                data-aos="fade-right"
              >
                <h3 className="pe-xxl-5 md-pb-20">
                  Learn more about our Looker services.
                </h3>
              </div>
              <div
                className="col-lg-6 text-center text-lg-end"
                data-aos="fade-left"
              >
                <a to="/contact" className="msg-btn tran3s">
                  Send Us Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DataSection;
