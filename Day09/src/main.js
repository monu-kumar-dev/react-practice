import React, { useEffect, useState, useCallback } from "react";
import ReactDom from "react-dom/client";
import Header from "./Component/header";
import Body from "./Component/body";

function GithubProfile() {
  // Header
  // Body: 10 card show krenge

  return (
    <>
      <Header></Header>
      <Body></Body>
    </>
  );
}

const container = document.getElementById("root");
const reactRoot = ReactDom.createRoot(container);
reactRoot.render(<GithubProfile />);

// ++++++++++++++++++ Api ++++++++++++++++++++++

// https://api.github.com/users?per_page=${count}
// https://api.github.com/users/monu-kumar-dev
// https://api.github.com/users?since=6000&per_page=20
