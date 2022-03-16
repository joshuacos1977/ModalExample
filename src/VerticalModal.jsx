import Modal from "react-bootstrap/Modal";
import {  Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import OptionsMenu from './OptionsMenu';


const VerticalModal = (props) => {
    return ( 
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        > 
          <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
              

               </Modal.Title>
         <Modal.Body>
             <h4>Brands</h4>
              <OptionsMenu />
         </Modal.Body>

          </Modal.Header>
            
          <Modal.Footer>
               <Button  variant="primary" onClick={props.onHide}>Close</Button>
         </Modal.Footer>  
     </Modal>
     );
}
 
export default VerticalModal;

