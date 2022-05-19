import React from 'react';
import styled from 'styled-components';

import { mobile } from './responsive';


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 110%;
  object-fit: cover;
  ${mobile({height: "100%;", width: "100%;"})}
`
const Title = styled.h1`
  font-weight: 900;
  color: #fff;
  margin-bottom: 10px;
  background-color: rgba(160, 160, 160, 0.5);
  border-radius: 1px;
  cursor: default;
  ${mobile({fontSize: "20px;"})}
`
const Info = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
const Button = styled.button`
  background-color: #fff;
  padding: 10px;
  border: none;
  color: gray;
  cursor: pointer;
  font-weight: 900;
`

export const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}
