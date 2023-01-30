import React from 'react';
import CategoriesFilter from './Categories';
import PriceFilter from './PriceFilter';
import DiscreteSlider from "./Rating";



function ParentFilter() {
    return ( 
        <>
       <div className='parentFilter'>
          <DiscreteSlider />
          <PriceFilter />
          <CategoriesFilter />
       </div>
        </>
     );
}

export default ParentFilter;