import React from "react";
import BlogPost from "./BlogPost";
import "./BlogPostList.css";

const BlogPostList = ({ posts }) => {
  return (
    <div className="blog-post-list">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
