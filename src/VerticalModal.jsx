import Modal from "react-bootstrap/Modal";

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
              <OptionsMenu  onHide={props.onHide}/>
         </Modal.Body>

          </Modal.Header>
            
          
     </Modal>
     );
}
 
export default VerticalModal;

