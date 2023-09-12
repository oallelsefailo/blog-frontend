import React from "react";
import BlogPost from "./BlogPost";
import "./BlogPostList.css";
import { Link } from "react-router-dom";

const BlogPostList = ({ posts }) => {
  return (
    <div className="blog-post-list">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <BlogPost post={post} />
        </Link>
      ))}
    </div>
  );
};

export default BlogPostList;
