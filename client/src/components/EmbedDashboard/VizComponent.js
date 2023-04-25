import React, { useState, useEffect } from "react";
import { sdk } from "../../helpers/CorsSessionHelper";
import { Query, Visualization, SingleValue } from "@looker/visualizations";

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';


import { sampleQuery } from "./sampleQuery";

import styled from "styled-components";

const EmbedComponent = () => {
  const [dashboardData, setDashboardData] = useState([]);
  useEffect( async () => {
  let response = await  sdk.ok(sdk.dashboard("789") , { mode: 'no-cors'} ).then((res) => {
      Promise.all(
        res.dashboard_elements.map(
          (element) =>
            new Promise((resolve, reject) => {
              sdk
                .ok(sdk.run_query({ query_id: element.query.id, result_format: "json" }))
                .then((res) => {
                  console.log("query-data", element.title, res, Object.values(res)[0]);

                  switch (element.title) {
                    case "Website Visit Volume vs Conversion Rate":
                      resolve({
                        title: element.title,
                        query: Math.round(Object.values(res)[0]["events.overall_conversion"]* 100).toFixed(0)  + "%",
                        img: "./images/icon/icon_11.svg"
                      });
                    case "Orders To Date":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["orders.number_of_orders"],
                        img: "./images/icon/icon_08.svg"
                      });
                    case "Orders by Day and Category":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["orders.number_of_orders"][
                          "products.category"
                        ]["Accessories"],
                        img: "./images/icon/icon_31.svg"
                      });
                    case "Total Sales YoY":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["order_items.total_sale_price"][
                          "order_items.created_year"
                        ]["2022"].toFixed(2),
                        img: "./images/icon/icon_30.svg"
                      });
                    case "Repeat Purchase Rate":
                      resolve({
                        title: element.title,
                        query: Math.round(Object.values(res)[0][
                          "repeat_purchases.percentage_repeat_purchase"
                        ]* 100).toFixed(0)  + "%",
                        img: "./images/icon/icon_29.svg"
                      });
                    case "Average Order Value":
                      resolve({
                        title: element.title,
                        query: "$" + Object.values(res)[0]["order_items.average_sale_price"].toFixed(2),
                        img: "./images/icon/icon_09.svg"
                      });
                    case "Age Profile":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["orders.number_of_orders"]["users.age_buckets"]["Below 35"] + " Below 35",

                        img: "./images/icon/icon_39.svg"
                      });
                    case "Number of Users":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["users.number_of_users"],
                        img: "./images/icon/icon_10.svg"
                      });
                    case "Gender Profile":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["users.gender"][0],
                        img: "./images/icon/icon_37.svg"
                      });
                    default:
                      resolve({
                        title: element.title,
                        query: 0,
                      });
                  }
                })
                .catch((err) => {
                  console.log("err", err);
                  reject();
                });
            })
        )
      ).then((values) => {
        setDashboardData(values);
      });
    });
  }, []);



  return (

<Container>
<Row className="row gx-xxl-5 pb50 pt50">

      {dashboardData.map((data) => {
              return (
        <div class="col-lg-4 col-sm-6 mb-40 xs-mb-30 d-flex" data-aos-delay="">


          <div class="block-style-four">
          <div class="d-flex align-items-center justify-content-center flex-column">
            <img src={data.img} className="img-fluid"/>
            <h5>{data.title}</h5>
            <p>{data.query}</p>


            </div>
            </div>



      </div>
        );
      })}


</Row>
    </Container>
  );
};

export default EmbedComponent;




// const EmbedComponent = (props) => {
//
//   const [queryId, updateQueryId] = useState();
//
//
//   useEffect( async () => {
//
//      var a = sdk.ok(sdk.run_query({query_id: '20388', result_format: 'json'})).then((res) => {
//
//        var values = []
//        for(var k in a){
//          values.push(a[k]);
//          console.
//        }
//       console.log("this is data", res);
//
//
//       console.log(res[0])
//
//     });
//
//
//
//
//   }, []);
//
//
// const [queryDash, setQueryId] = useState();
// useEffect( () => {
//
//  sdk.ok(sdk.dashboard('789')).then((res) => {
//     console.log(res);
//
//
//   setQueryId(res.dashboard_elements[0].title);
//
//
//     for (let result in res.dashboard_elements) {
//       let query = res.dashboard_elements[result].query.id;
//
//       let title = res.dashboard_elements[result].title;
//
//       console.log('Title ', title);
//       console.log('query ', query);
//
//
//
//     }
//   });
// }, []);
//
//
//
//
//
//   return (
//
//
//
//       <div>
//
//             <p>{queryDash}</p>
//
//       </div>
//
//
//   );
// };
//
// export default EmbedComponent;
