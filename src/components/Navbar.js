import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from './responsive';


const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px;"})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px;"})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({width: "50px;"})}
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`
const Logo = styled.h1`
  font-weight: 900;
  font-size: 32px
  cursor: default;
  ${mobile({fontSize: "22px;"})}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center;", flex: "2"})}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "11px;", marginLeft: "5px"})}
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language> Left</Language> */}
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{color: "gray", fontSize: "16px"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>[   de·i·ty   ]</Logo>
        </Center>
        <Right>
          <MenuItem> Register</MenuItem>
          <MenuItem> Sign In</MenuItem>
          <MenuItem> 
            <Badge badgeContent={4} color="primary" overlap="rectangular">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;