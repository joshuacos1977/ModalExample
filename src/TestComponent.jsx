import React, { Component } from 'react'

const TestComponent = ({ name, id, email,group}) => {
    return (
        
       
        
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{group}</td>
          </tr>
         
        
     
      );
}
 
export default TestComponent;