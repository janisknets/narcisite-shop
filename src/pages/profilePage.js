import React from 'react';
import { Tab, Tabs, Col, Container, Row } from 'react-bootstrap';

function ProfilePage () {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="info" title="My Info">
    <Container>
      <Row id="userInfo">
        <Col sm={2}>Name Surname</Col>
        <Col sm={2}>John Doe</Col>
      </Row>
      <Row id="userInfo">
        <Col sm={2}>Address</Col>
        <Col sm={2}>London street 1, UK</Col>
      </Row>
      <Row id="userInfo">
        <Col sm={2}>Phone</Col>
        <Col sm={2}>+111 222 333 5</Col>
      </Row>
    </Container>
  </Tab> 
  <Tab eventKey="orders" title="My orders">
    <Container>
        <Row id="userInfo">
          <Col sm={2}>Order Nr</Col>
          <Col sm={2}>1</Col>
        </Row>
        <Row id="userInfo">
          <Col sm={2}>Order date</Col>
          <Col sm={2}>20/01/2020</Col>
        </Row>
        <Row id="userInfo">
          <Col sm={2}>Delivery date</Col>
          <Col sm={2}>20/02/2020</Col>
        </Row>
        <Row id="userInfo">
          <Col sm={2}>Order status</Col>
          <Col sm={2}>Closed</Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row id="userInfo">
          <Col sm={2}>Order Nr</Col>
          <Col sm={2}>2</Col>
        </Row>
        <Row id="userInfo">
          <Col sm={2}>Order date</Col>
          <Col sm={2}>15/05/2020</Col>
        </Row>
        <Row id="userInfo">
          <Col sm={2}>Delivery date</Col>
          <Col sm={2}>25/07/2020</Col>
        </Row>
        <Row id="userInfo">
          <Col sm={2}>Order status</Col>
          <Col sm={2}>In Process</Col>
        </Row>
      </Container>
  </Tab>
</Tabs>
  )
} 


export default ProfilePage;
