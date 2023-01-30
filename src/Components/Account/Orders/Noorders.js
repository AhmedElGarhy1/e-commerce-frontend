import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../../css/Orders.css';
function NoOrders(params) {
    return(<>
     <div  className='navOreders'>
     <div className="para_AccountOrders">
          <h2>Your Orders</h2>
        </div>
     <InputGroup className="mb-3" style={{marginTop:'20px'}}>
        <Form.Control
          placeholder="Tyor The complete Order ID"
          aria-label="Tyor The complete Order ID"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
       
       <div className='Orderspara'>
        <p>You Have No Orders Yet!</p>
       </div>
     </div>
    </>);
}
export default NoOrders;
