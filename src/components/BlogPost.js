import React from "react";
import "./BlogPost.css"; // Import the CSS file

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-meta">
        <span>Author: {post.author}</span>
        <span>Date: {post.date}</span>
      </div>
    </div>
  );
};

export default BlogPost;
