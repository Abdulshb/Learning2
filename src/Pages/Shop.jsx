import React from 'react'
import Hero from '../../js/Components/Hero/Hero'
import Popular from '../../js/Components/Popular/Popular';
import Offer from '../../js/Components/Offer/Offer';
import Newcollection from '../../js/Components/Newcollection/Newcollection';
import { Newsletter } from '../../js/Components/Newsletter/Newsletter';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Newsletter/>

      </div>
  )
}

export default Shop;

