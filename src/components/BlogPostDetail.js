import React from "react";
import "./BlogPostDetail.css";

const BlogPostDetail = ({ post }) => {
  return (
    <div className="blog-post-detail">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <div className="post-meta">
        <span>Author: {post.author}</span>
        <span>Date: {post.date}</span>
      </div>
    </div>
  );
};

export default BlogPostDetail;
