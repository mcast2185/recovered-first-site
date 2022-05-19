import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: steelblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  cursor: default;
`

const Announcement = () => {
  return (
    <Container>
      The jig is up
    </Container>
  )
}

export default Announcement;