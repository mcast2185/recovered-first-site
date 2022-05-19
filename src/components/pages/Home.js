import React from 'react';
import styled from 'styled-components';

import Announcement from '../Announcement';
import { Categories } from '../Categories';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Newsletter } from '../Newsletter';
import { Products } from '../Products';
import { mobile } from '../responsive';
import Slider from '../Slider';

const StyleWrapper = styled.div`
  ${mobile({display: "none;"})}
`

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Slider/>
      <Categories/>
      <StyleWrapper>
        <Products/>
      </StyleWrapper>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home;