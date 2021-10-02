import React from "react";
import { githubProvider } from "./config/authMethods";
import socialMediaAuth from "./service/auth";
//import { LoginPage } from "./pages";

function App() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div className="App">
      <p>App</p>
      <button onClick={() => handleOnClick(githubProvider)}>
        Login With Github
      </button>
    </div>
  );
}

export default App;
