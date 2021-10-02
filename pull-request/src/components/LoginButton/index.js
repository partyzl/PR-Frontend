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
      <div className="h-100 row align-items-center">
        <SignUp onClick={() => handleOnClick(githubProvider)}>
          Login With Github
        </SignUp>
      </div>
    </>
  );
};

export default LoginButton;

const SignUp = styled.button`
  background: none;
  border-radius: 100px;
  font-size: 20px;
`;
