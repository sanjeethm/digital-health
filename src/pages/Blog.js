import React from 'react';

const Blog = () => {
  return (
    <div className="container">
      <h1>Blog</h1>
      <div className="row">
        <div className="col-md-4">
          <h2>Blog Post 1</h2>
          <p>Excerpt from Blog Post 1...</p>
          <a href="/blog/post-1" className="btn btn-secondary">Read More</a>
        </div>
        <div className="col-md-4">
          <h2>Blog Post 2</h2>
          <p>Excerpt from Blog Post 2...</p>
          <a href="/blog/post-2" className="btn btn-secondary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
