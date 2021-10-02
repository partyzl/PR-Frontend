import React from "react";
import { LoginPage } from "./pages";
import "./index.css";
import { Navbar } from "./layout";
import { PullRequestItem } from "./components";
import { MarkdownEditorPage } from "./pages";

// import logo from "./logo.svg";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <LoginPage />
      <ul>
        <PullRequestItem handle={"@test handle"} stat={"STATUS_CONNECTED"} />
      </ul>
    </div>
  );
}

export default App;
