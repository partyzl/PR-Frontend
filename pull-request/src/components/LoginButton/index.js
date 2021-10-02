import React from "react";
import socialMediaAuth from "../../service/auth";
import firebase from "../../config/firebaseConfig";

const LoginButton = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <>
      <button onClick={() => handleOnClick(githubProvider)}>
        Login With Github
      </button>
    </>
  );
};

export default LoginButton;
