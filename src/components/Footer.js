import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()} <span>illumination</span>
      </h5>
      <h5>all rights reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);

  span {
    color: var(--clr-primary-5);
  }

  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export default Footer;
