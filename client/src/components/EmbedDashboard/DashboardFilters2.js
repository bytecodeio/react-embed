import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { LookerEmbedSDK } from "@looker/embed-sdk";

import { sdk } from "../../helpers/CorsSessionHelper";

import "../../App.css";

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip } from 'react-bootstrap';

import { dashboard } from "@looker/sdk/lib/3.1/funcs";
import  images  from "./images.js";

const DashboardFilters = ({ dashboard, filters, setFilters }) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [clicked, setClicked] = useState(false);
// const [male, setMale] = useState(filters?.Gender);
// const [female, setFemale] = useState(filters?.Gender);

const [gender, setGender] = useState(filters?.Gender);
const [usa, setUsa] = useState(filters?.State);
const [source, setSource] = useState(filters?.traffic_source);


useEffect(() => {
    if (clicked) {
      if (dashboard) {
        dashboard.send("dashboard:filters:update", { filters });
      }
      setClicked(false);
    }
  }, [dashboard, filters, clicked]);


const handleGenderChange = (e) => {
    const value = e.target.value;
    setClicked(true);
    setGender(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      Gender: value,
    }));
    if (dashboard) {
      dashboard.send("dashboard:filters:update", { filters });
    }
  };


  const handleSourceChange = (e) => {
      const value = e.target.value;
      setClicked(true);
      setSource(value);
      setFilters((prevFilters) => ({
        ...prevFilters,
        traffic_source: value,
      }));
      if (dashboard) {
        dashboard.send("dashboard:filters:update", { filters });
      }
    };

    const handleUSStateChange = (e) => {
        const value = e.target.value;
        setClicked(true);
        setUsa(value);
        setFilters((prevFilters) => ({
          ...prevFilters,
          State: value,
        }));
        if (dashboard) {
          dashboard.send("dashboard:filters:update", { filters });
        }
      };



  // const handleGenderChange = (e) => {
  //     const value = e.target.value;
  //     const isChecked = e.target.checked;
  //
  //     if (isChecked) {
  //       setGender([...gender, value]);
  //     } else {
  //       setGender(gender.filter((v) => v !== value));
  //     }
  //
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       Gender: [...gender],
  //     }));
  //
  //     if (dashboard) {
  //       dashboard.send("dashboard:filters:update", { filters });
  //     }
  //   };



  // const handleGenderChange = (e) => {
  //     const value = e.target.value;
  //     setClicked(true);
  //
  //
  //     if (gender.includes(value)) {
  //         setGender((prevGender) => prevGender.filter((v) => v !== value));
  //       } else {
  //         setGender((prevGender) => [...prevGender, value]);
  //       }
  //
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       Gender: value,
  //     }));
  //     if (dashboard) {
  //       dashboard.send("dashboard:filters:update", { filters });
  //     }
  //   };


  // const handleFemaleChange = (e) => {
  //     const value = e.target.value;
  //     setClicked(true);
  //     setFemale(value);
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       Gender: value,
  //     }));
  //     if (dashboard) {
  //       dashboard.send("dashboard:filters:update", { filters });
  //     }
  //   };

  // const handleMale = (e) => {
  //   setClicked(true)
  //   setFilters((prevFilters) => {
  //     return {
  //       ...prevFilters,
  //       Gender: e.target.value,
  //     };
  //   });
  //
  //
  //   if (dashboard) {
  //
  //     dashboard.send("dashboard:filters:update", { filters });
  //   }
  // };
  //
  // const handleFemale = (e) => {
  //   setClicked(true)
  //
  //   setFilters((prevFilters) => {
  //     return {
  //       ...prevFilters,
  //       Gender: e.target.value,
  //     };
  //   });
  //
  // };


  // const handleSourceChange = (e) => {
  //   setFilters((prevFilters) => {
  //     return {
  //       ...prevFilters,
  //       Source: e.target.value,
  //     };
  //   });
  //   if (dashboard) {
  //
  //     dashboard.send("dashboard:filters:update", { filters });
  //   }
  // };


  return (
<div>


<Row className="tiles coolclass">
<div className="d-flex justify-content-between flex-wrap">

{images && images.map((item) =>
  <div key={item.id}>




  <Form.Group>

    <Form.Check
      type="checkbox"
      className="img-fluid"
      label=<img src={item.image} className="img-fluid"/>
      //checked={usa === item.name}
      value={item.name}
      name="usa"
      onChange={handleUSStateChange}
    />

    </Form.Group>
  </div>


)

}


</div>
</Row>
  <div className="dropdownMenu">

    <Row>

      <div className="cc-selector d-flex justify-content-center align-items-center">


{console.log(filters)}


      <p className="moveDown">Filter Gender:</p>
        <Form.Group controlId="F">

          <Form.Check
            type="checkbox"
            className="lime"
            label="Female"
            name="gender"
            checked={gender === "F"}
            value="F"

            onChange={handleGenderChange}
          />


    </Form.Group>
      <Form.Group controlId="M">
          <Form.Check
            type="checkbox"
            className="red"
            label="Male"
            name="gender"
            checked={gender === "M,F"}
            value="M,F"

            onChange={handleGenderChange}
          />
      </Form.Group>


      <p className="moveDown two">Filter Traffic Source:</p>



            <Form.Group controlId="Email">

              <Form.Check
                type="checkbox"
                className="orange"
                label="Email"
                // checked={source === "Email"}
                value="Email"
                name="trafficSource"
                onChange={handleSourceChange}
              />

              </Form.Group>

              <Form.Group controlId="Facebook">

                <Form.Check
                  type="checkbox"
                  className="yellow"
                  label="FB"
                  // checked={source === "Facebook"}
                  value="Facebook"
                  name="trafficSource"
                  onChange={handleSourceChange}
                />

                </Form.Group>


                  <Form.Group controlId="Search">

                    <Form.Check
                      type="checkbox"
                      className="purple"
                      label="Search"
                      // checked={source === "Search"}
                      value="Search"
                      name="trafficSource"
                      onChange={handleSourceChange}
                    />

                    </Form.Group>




           <p className="moveDown two">Filter States:</p>
              <Button  className="map">
          <i class="fal fa-map-marker-alt"></i>

              </Button>


      </div>




    </Row>
</div>

</div>



  );
};

export default DashboardFilters;
