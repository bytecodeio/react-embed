
import React, { useState, useRef, useEffect } from 'react';


import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

import AOS from 'aos';
import "aos/dist/aos.css"


import Vis from "../EmbedDashboard/VizComponent.js";





function TopSection() {

  const ServiceContent = [
      {
          icon: "icon_31",
          title: 'Looker',
          desc: `Looker is a tool that helps you explore, share, and visualize your company's data so that you can make better business decisions.`,
          arrow: 'icon_20',
          datadelay: '',
          dataAos: 'fade-right',
          className: ''
      }, {
          icon: "icon_32",
          title: 'Retool',
          desc: `Stop wrestling with UI libraries, hacking together data sources, and figuring out access controls. Start shipping apps that move your business forward.`,
          arrow: 'icon_20',
          datadelay: '100',
          dataAos: 'fade-up',
          className: 'active'
      }, {
          icon: "icon_33",
          title: 'dbt',
          desc: `Data documentation is accessible, easily updated, and allows you to deliver trusted data across the organization.`,
          arrow: 'icon_20',
          dataDelay: '',
          dataAos: 'fade-left',
          className: ''
      }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [navbar, setNavbar] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
      setIsOpen(true);
  }
  const closeModal = () => {
      setIsOpen(!modalIsOpen);
  }

  const toggleMenu =()=>{
    if(window.scrollY >= 68) {
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', toggleMenu);




return (




<Container fluid>



<div className="hero-banner-five" id="home">
        <Container>
              <Row>

                <Col sm={12} md={7} lg={6}>



                      <h1 className="hero-heading">MiniByte IO Solution for user<span> analytics.</span></h1>
                      <p className="text-lg mb-50 pt-40 pe-xl-5 md-pt-30 md-mb-40">Looker's Embed SDK is a library of functions that you can add to the code of your browser-based web application to manage embedded dashboards, Looks, and Explores in your web app.</p>
                      <ul className="style-none button-group d-flex align-items-center">
                          <li className="me-4"><a href="/services" className="demo-btn ripple-btn tran3s">Services</a></li>

                      </ul>
                </Col>
              </Row>

        </Container>
          <div className="illustration-holder move">
          <img src="./images/ils_05.svg" alt="" class="main-illustration w-100 shape0" />
          <img src="./images/ils_05_1.svg" alt="" class="shapes shape-one" />
          <img src="./images/ils_05_2.svg" alt="" class="shapes shape-two aos-init aos-animate" data-aos="fade-up" data-aos-anchor=".fancy-feature-two" data-aos-delay="100" data-aos-duration="2000" />
          <img src="./images/ils_05_3.svg" alt="" class="shapes shape-three aos-init aos-animate" data-aos="fade-up" data-aos-anchor=".fancy-feature-two" data-aos-delay="150" data-aos-duration="2000" />
          <img src="./images/ils_05_4.svg" alt="" class="shapes shape-four" />
          <img src="./images/ils_05_5.svg" alt="" class="shapes shape-five" />
          </div>

          <div className="shapes oval-one" />
      </div>



      <div className="theme-inner-banner" id="about">
          <Container>
            <h2 class="intro-title text-center">About Us</h2>
            <ul class="page-breadcrumb style-none d-flex justify-content-center">

            </ul>
          </Container>
          <img src="./images/shape_38.svg" alt="" class="shapes shape-one" />
          <img src="./images/shape_39.svg" alt="" class="shapes shape-two" />
      </div>





        <div className="fancy-feature-seventeen position-relative mt-160 xl-mt-50 mb-5 mt-5">
            <Container>
                  <Row className="row align-items-center">
                    <Col sm={12} md={6} lg={5}  data-aos="fade-right">
                        <div className="title-style-three text-center text-lg-start">
                            <h2 className="main-title strong">
                                <span>MiniByte IO</span> Modern Data Stack.</h2>
                        </div>

                    </Col>
                    <Col sm={12} md={6} lg={7} data-aos="fade-left">
                        <p className="m0 text-center text-lg-start md-pt-30">MiniByte IO is a consulting company focused on helping businesses make the best use of the valuable data they collect.</p>
                    </Col>
                </Row>

                <Row className="service-details position-relative mt-160 mb-150 lg-mt-100 lg-mb-100">

  <Col sm={12} md={12} lg={12}>

  <div className="service-details-meta">

<h3 class="sub-title">Technology we use</h3>

<p>MiniByte IO's team of consultants, engineers and full stack developers work with your team to provide expertise and increased capacity where needed.</p>


<div>
    <div class="row">
        <div class="col-md-4 d-flex" data-aos-delay="">
            <div class="block-style-ten color-two ps-2 pe-2 text-center tran3s mt-10">
                <div class="icon d-flex align-items-end"><img src="./images/icon/icon_39.svg" alt="" class="m-auto" /></div>
                <h6><a href="">SQL</a></h6>
            </div>
        </div>
        <div class="col-md-4 d-flex" data-aos-delay="100">
            <div class="block-style-ten color-two ps-2 pe-2 text-center tran3s mt-10">
                <div class="icon d-flex align-items-end"><img src="./images/icon/icon_37.svg" alt="" class="m-auto" /></div>
                <h6><a href="">AWS</a></h6>
            </div>
        </div>
        <div class="col-md-4 d-flex" data-aos-delay="200">
            <div class="block-style-ten color-two ps-2 pe-2 text-center tran3s mt-10">
                <div class="icon d-flex align-items-end"><img src="./images/icon/icon_38.svg" alt="" class="m-auto" /></div>
                <h6><a href="">Auto Algorithm</a></h6>
            </div>
        </div>
    </div>
</div>


  </div>



</Col>
                </Row>
                <Row>

                <div className="title-style-three text-center pt50 pb50">
            <h2 class="main-title">MiniByte's <span>Analytics</span></h2>
            </div>

             <Col sm={12} md={12} lg={12} className="mt-5 pb-5 mb-5">
             <h3 class="sub-title">Looker's API Explorer - Get Dashboard & Run Query</h3>
             <p>Below we have used the <span className="strong">Get Dashboard</span> API call to return the full details of the identified dashboard object. This has returned the query IDs for each tile. We can then loop through the query IDs with Looker's API call, <span className="strong">Run Query</span>.</p>
               {/*<div className="abso2"></div>*/}
                   <Vis/>
              <div className="abso"></div>
               </Col>
            </Row>


            <h3 class="sub-title">Software We Use</h3>

            <p>MiniByte offers solution architecture, build and integration of data workflows, systems and pipelines from ground 0 or based on your current data structure and workflow</p>


                <Row className="row align-items-center marginTop">
                    {ServiceContent.map((val, i) => (
                        <Col key={i} sm={12} md={6} lg={4} data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                            <div
                                className={`block-style-twelve block-space ${val.className}`}>
                                <div className="icon d-flex align-items-end">
                                <img src={`./images/${val.icon}.svg`} alt=""/></div>
                                <h5 className="mt-3">
                                    <a to="">{val.title}</a>
                                </h5>
                                <p>{val.desc}</p>
                                <a to="" className="tran3s more-btn"><img src="./images/icon_20.svg" alt=""/></a>
                            </div>

                        </Col>
                    ))}

                </Row>
            </Container>

            <div className="shapes shape-one"/>
        </div>


      <div className="fancy-feature-five position-relative mt-50 mb-50">
          <Container>
              <Row className="row align-items-center">

                  <Col sm={12} md={6} lg={5} className="ms-auto">
                      <div className="block-style-five pt-60 md-pt-20" data-aos="fade-right">
                          <div className="title-style-one">
                              <div className="sc-title-four">WHY US</div>

                          </div>

                          <p className="pt-10 pb-70">Our team of solution architects, data engineers and Looker certified developers offer full stack services to solve the hardest data challenges. </p>

                          <ul class="style-none list-item color-rev">
                          <li>Looker Development to deliver data driven solutions.</li>
                          <li>Ramp scale to meet capacity needs as required.</li>
                          <li>Integration with the best cloud-based technologies available.</li>
                          <li>Snap into your process – sprint planning.</li>
                          </ul>
                          <a class="btn-one mt-3" href="/services">Learn More</a>

                          <div class="shapes oval-two"></div>

                      </div>

                  </Col>

                  <Col sm={12} md={6} lg={7} className="text-end">
                      <div className="illustration-holder d-inline-block position-relative xs-mt-20">
                          <img src="./images/ils_06.svg" alt="" className="main-illustration w-100"/>
                          <img src="./images/ils_06_1.svg" alt="" className="shapes shape-one"/>
                          <img src="./images/ils_06_2.svg" alt="" className="shapes shape-two"/>
                          <img
                              src="./images/ils_06_3.svg"
                              alt=""
                              className="shapes shape-three"
                              data-aos="fade-down"
                              data-aos-duration={1800}/>
                          <img
                              src="./images/ils_06_4.svg"
                              alt=""
                              className="shapes shape-four"
                              data-aos="fade-left"
                              data-aos-duration={1800}/>
                          <img src="./images/ils_06_5.svg" alt="" className="shapes shape-five"/>
                      </div>
                  </Col>
              </Row>
        </Container>
      </div>

</Container>


)

}

  export default TopSection;
