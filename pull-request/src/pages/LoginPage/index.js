import React from "react";
import { LoginButton } from "../../components";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <Body>
      <LoginButton />
    </Body>
  );
};

export default LoginPage;

const Body = styled.div`
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  height: 100%;
  postion: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
