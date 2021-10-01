import React from "react";
import githubProvider from "../../config/authMethods";
import socialMediaAuth from "../../service/auth";

const LoginButton = () => {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <>
      <button onClick={() => handleOnClick(githubProvider)}>Login</button>
    </>
  );
};

export default LoginButton;
