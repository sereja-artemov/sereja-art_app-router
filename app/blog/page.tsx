import MDXContent from '@/lib/MDXContent';
import React from 'react';

const Blog = () => {
  const blogs = new MDXContent('../posts').getAllPosts();
  debugger;
  console.log(blogs);

  return <div>Blog</div>;
};

export default Blog;
