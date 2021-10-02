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
  background-image: url("https://wallpaperaccess.com/full/3214763.jpg");
  height: 100%;
  postion: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
