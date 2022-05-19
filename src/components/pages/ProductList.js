import React from 'react';
import styled from 'styled-components';

import Announcement from '../Announcement';
import Footer from '../Footer';
import Navbar from "../Navbar";
import { Newsletter } from '../Newsletter';
import { Products } from '../Products';

const Container = styled.div`
  cursor: default;
`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  margin-right: 10px;
`
const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
  
`
const Option = styled.option`
  cursor: pointer;
  padding: 5px;

`

export const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filter Products:
          </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            Sort Products:
          </FilterText>
          <Select>
            <Option selected>
              Newest
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}
