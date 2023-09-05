import React from "react";
import "./App.css";
import { dummyPosts } from "./dummyData";
import BlogPostList from "./components/BlogPostList";

function App() {
  return (
    <div className="App">
      <h1>Blog Platform</h1>
      <BlogPostList posts={dummyPosts} />
    </div>
  );
}

export default App;
