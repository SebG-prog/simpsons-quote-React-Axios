import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const getPosts = async () => {
    try {
      const userPosts = await axios.get("http://dyagnosys.tk:8081");

      console.log(userPosts.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getPosts();
  });
  return (
    <div>
      <h1>useEffect</h1>
    </div>
  );
};
export default App;
