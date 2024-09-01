// src/components/Blog.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BlogPost from './BlogPost';

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <nav>
        <Link to="post/1">Post 1</Link>
        <Link to="post/2">Post 2</Link>
      </nav>
      <Routes>
        <Route path="post/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Blog;