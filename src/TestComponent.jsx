import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
const TestComponent = ({ name, id, email,group}) => {
    return (
        <Table bordered hover responsive variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{group}</td>
          </tr>
         
        </tbody>
      </Table>
      );
}
 
export default TestComponent;