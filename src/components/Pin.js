import React from "react";
import styled from "styled-components";

const Pin = ({ url }) => {
  return (
    <Wrapper>
      <Container>
        <img src={url?.regular} alt="pin" />
      </Container>
    </Wrapper>
  );
};

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    width: 100%;
    border-radius: 16px;
    cursor: zoom-in;
    object-fit: cover;
  }
`;
