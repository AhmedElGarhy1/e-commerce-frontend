import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import img from '../../../images/cart.png'
import '../../../css/Orders.css';
function HaveOrders(params) {
    return(<>
       <div  className='navOreders'>
       <div className="para_AccountOrders">
          <h2>Your Orders</h2>
        </div>
     <InputGroup className="mb-3"  style={{marginTop:'20px'}}>
        <Form.Control
          placeholder="Tyor The complete Order ID"
          aria-label="Tyor The complete Order ID"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
       

       <div>
        <p>2 orders</p>
        <div className='allOrders'>
            <div className='row'>
               <img
                src={img}
                alt='productImage'
                className='col-6'
               />
               <div className='col-6'>
                <p>
                    Status not processed order on monday ,sep 19 2022 order total EGP 1290
                </p>
               </div>
            </div>
            <div className='row'>
               <img
                src={img}
                alt='productImage'
                className='col-6'
               />
               <div className='col-6'>
                <p>
                    Status not processed order on monday ,sep 19 2022 order total EGP 1290
                </p>
               </div>
            </div>
        </div>
       </div>
      
     </div>
    
    </>);
}
export default HaveOrders;