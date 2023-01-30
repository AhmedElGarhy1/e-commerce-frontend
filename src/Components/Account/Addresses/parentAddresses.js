import React, { useState } from 'react';
import AddAddresses from './AddAddresses';
import NoAddresses from './NoAddresses';
function Addresses() {
  const[Add,setAdd]=useState(true);

  const AddAddresse=()=>{
       setAdd(false);
    }
  const Canseladdress=()=>{
    setAdd(true);;
  }

    return(<>
    {Add?
     <NoAddresses
     onclick={AddAddresse}
     />:
    <AddAddresses
    Cansel={Canseladdress}/>
    }
     
    
    
    </>);

}
export default Addresses;