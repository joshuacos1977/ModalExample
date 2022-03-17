import React, { useState, useEffect } from "react";
import VerticalModal from "./VerticalModal";
import { Button } from "react-bootstrap";
import TestComponent from "./TestComponent";
import { Table } from "react-bootstrap";
function App() {
  const [modalShow, setModalShow] = useState(false);
  const [options, setOptions] = useState([
    {
      id: 1,
      label: "360 Behavioral Health HR Support",
      name: "360 Behavioral Health HR Support",
      email: "360bhhrsupport@qs2500.com",
      group: "360 Behavioral Health",
      value: 1,
    },
    {
      id: 2,
      label: "Albero HR Support",
      name: "Albero HR Support",
      email: "AKAHRSupport@qs2500.com",
      group: "Albero - Retirement Plans",
      value: 2,
    },
  ]);

  const [current, setCurrent] = useState(null);

  useEffect(() => {
    window.addEventListener("updatedata", handleData);
  }, []);

  const handleData = (data) => {
    alert(JSON.stringify(data.detail)); //convert object to a String
        console.log("data:",data)
    setCurrent(data.detail.id);
  };
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      {current &&<Table bordered hover responsive variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Email</th>
           <th>Group</th>
         </tr>
       </thead>
       <tbody>
          {options.map(
            (option) =>
              option.id === current && (
                <TestComponent
                  name={option.name}
                  email={option.email}
                  group={option.group}
                  id={option.id}
                /> 
              )
          )}
        </tbody>
      </Table>}
      <VerticalModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default App;

// import React,{ useState,useRef} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
// const App = () => {

//     const options = 
//     [
//     { id:1,
//       name: "John",
//       email:"360bhhrsupport@qs2500.com",
//       group:"360 Behavioral Health" },

//     { id:2, 
//       name: "Albero ",
//       email:"AKAHRSupport@qs2500.com",
//       group:"Albero - Retirement Plans"},

//     { id:3, name: "Alcoa HR Support",
//       email:"alcoahrsupport@qs2500.com",
//       group:"Alcoa - Other" },
//       ]
//       const [details, setdetails] = useState({id:"",name:"",email:"",group:""})
//       const [show, setShow] = useState(false);
//       const [isShowTable, setisShowTable] = useState(false)
//       const handleClose = () => setShow(false);
//       const handleShow = () => setShow(true);
//       const ref = useRef(null)
//       const handleClick = (id) =>{
//         const newDetails = options.filter((e)=> {return id ===e.id})
//         console.log(newDetails);
//         setdetails({id:newDetails[0].id,name:newDetails[0].name,email:newDetails[0].email,group:newDetails[0].group})
//         ref.current.click()
//         setisShowTable(true)
//       }

     
//   return (
//     <>
//     <Button variant="primary" onClick={handleShow}>
//         Select The Name
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Dropdown style={{display:'flex',justifyContent:"center"}}>
//           <Dropdown.Toggle variant="success" id="dropdown-basic">
//             Select Name
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             {options.map((e) =><Dropdown.Item onClick={() => handleClick(e.id)}>{e.name}</Dropdown.Item>)}

//           </Dropdown.Menu>
//         </Dropdown>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button style={{display:"none"}} variant="secondary"  ref={ref} onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
// {isShowTable&&<><div style={{height:"5vw"}}></div>
//     <Table striped bordered hover varient="dark">
//     <thead>
//       <tr>
//         <th>id</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Group</th>
//       </tr>
//     </thead>
//      <tbody>
//        <tr>
//          <td>{details.id}</td>
//          <td>{details.name}</td>
//          <td>{details.email}</td>
//          <td>{details.group}</td>
//        </tr>
//        </tbody>

//   </Table></>}    

// </>

//   )
// }
// export default App;
