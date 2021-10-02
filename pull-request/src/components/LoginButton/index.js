import React from "react";
import socialMediaAuth from "../../service/auth";
import firebase from "../../config/firebaseConfig";
import styled from "styled-components";

const LoginButton = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <>
      <SignUp onClick={() => handleOnClick(githubProvider)}>
        Login With Github
      </SignUp>
    </>
  );
};

export default LoginButton;

const SignUp = styled.button`
  margin-top: 50%;
  margin-left: 45%;
  border: 3px solid black;
  padding: 10px;
  position: fixed;
  background: none;
  border-radius: 100px;
`;
