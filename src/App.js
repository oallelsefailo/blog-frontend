import React from "react";
import "./App.css";
import { dummyPosts } from "./dummyPosts";
import BlogPostList from "./components/BlogPostList";
import BlogPostDetail from "./components/BlogPostDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Blog Platform</h1>
        <Routes>
          <Route path="/" element={<BlogPostList posts={dummyPosts} />} />
          <Route
            path="/post/:id"
            element={<BlogPostDetail posts={dummyPosts} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
