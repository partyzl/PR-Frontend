import React from "react";
import { LoginButton } from "../../components";
import "./styles.css";

const LoginPage = () => {
  return (
    <>
      <div className="loging-body">
        <LoginButton className="login-btn" />
      </div>
    </>
  );
};

export default LoginPage;
