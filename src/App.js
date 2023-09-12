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
            element={({ match }) => {
              const postId = match.params.id;
              const selectedPost = findPostById(postId);
              console.log("postId:", postId);
              console.log("selectedPost:", selectedPost);
              return <BlogPostDetail post={selectedPost} />;
            }}
          />
        </Routes>
      </div>
    </Router>
  );
}

function findPostById(postId) {
  return dummyPosts.find((post) => post.id.toString() === postId);
}

export default App;
