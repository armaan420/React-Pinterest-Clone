import React, { useState, useEffect } from "react";
import Pin from "./Pin";
import styled from "styled-components";

const PinBoard = ({ pins }) => {
  return (
    <Wrapper>
      <Container>
        {pins.map((pin) => {
          return <Pin key={pin.id} url={pin.urls} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default PinBoard;

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 15px;
  justify-content: center;
`;

const Container = styled.div`
  background-color: white;
  width: 80%;
`;
