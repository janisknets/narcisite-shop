import React from 'react';
import { Tab, Tabs, Table } from 'react-bootstrap';

function ProfilePage () {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="info" title="My Info">
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Address</th>
      <th>Phone number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>Dream street 7, London, UK</td>
      <td>+ 123 222 333 44</td>
    </tr>
   </tbody>
   </Table>
  </Tab>
  <Tab eventKey="orders" title="My orders">
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Order nr</th>
      <th>Order date</th>
      <th>Delivery date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>19-01-2015</td>
      <td>20-01-2015</td>
      <td>Closed</td>
    </tr>
    <tr>
      <td>2</td>
      <td>17-07-2020</td>
      <td>18-07-2020</td>
      <td>Active</td>
    </tr>
  </tbody>
</Table>
  </Tab>
</Tabs>
  )
} 


export default ProfilePage;
