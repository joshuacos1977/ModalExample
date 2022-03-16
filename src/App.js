import React, { useState } from 'react';
import VerticalModal  from  './VerticalModal';
import {  Button } from 'react-bootstrap';
function App(){
  const [modalShow,setModalShow] = useState(false);
  return(
    <>
       <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <VerticalModal show={modalShow}
                     onHide={()=>setModalShow(false)}
       />              
    </>
  )

}
export default App;









