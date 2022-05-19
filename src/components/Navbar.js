import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';


const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
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
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

// import * as React from 'react';
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';

// export default function SimpleBadge() {
//   return (
    // <Badge badgeContent={4} color="primary">
    //   <MailIcon color="action" />
    // </Badge>
//   );
// }

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> Left</Language>
          <SearchContainer>
            <Input/>
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
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;