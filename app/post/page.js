"use client";
import React, { useEffect, useState } from "react";

const Post = () => {
const [post, setPost] = useState([]); 
  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setPost(data);
    }
    fetchPost();
  }, []);
  return (
    <div className="post-container">
      {post.map(({ id, title, body }) => (
        <div className="post-card" key={id}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
