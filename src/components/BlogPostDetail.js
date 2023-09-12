import React from "react";
import { useParams } from "react-router-dom";

const BlogPostDetail = ({ posts }) => {
  const { id } = useParams();
  const selectedPost = findPostById(Number(id), posts);

  return (
    <div className="blog-post-detail">
      <h2 className="post-title">{selectedPost.title}</h2>
      <p className="post-content">{selectedPost.content}</p>
      <div className="post-meta">
        <span>Author: {selectedPost.author}</span>
        <span>Date: {selectedPost.date}</span>
      </div>
    </div>
  );
};

function findPostById(postId, posts) {
  return posts.find((post) => post.id === postId);
}

export default BlogPostDetail;
