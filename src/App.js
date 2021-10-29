import { Router } from "@reach/router";
import React, { useEffect, useState } from "react";


function App() {
  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://rehaan_workers.rhmehta.workers.dev/posts"
      );
      const postsResp = await resp;
      console.log(postsResp);
    };
    getPosts();
  }, []);
  return (
    <div>
    <span>Hello world</span>
  </div>
  );
}

export default App;