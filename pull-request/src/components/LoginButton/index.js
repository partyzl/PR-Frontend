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
      <div className="h-100 row align-items-center p-5">
        <SignUp onClick={() => handleOnClick(githubProvider)}>
          Login With Github
          <span className="my-1 p-2">
            <GithubLogo
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </GithubLogo>
          </span>
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

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: 1px solid white;

    .logo {
      color: white;
    }
  }
`;

const GithubLogo = styled.svg`
  &:hover {
    transition: 0.9s;
    transform: rotateY(360deg);
  }
`;
