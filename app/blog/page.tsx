import MDXContent from '@/lib/MDXContent';
import { getPost, getPosts } from '@/lib/MDXContentNew';
import React from 'react';

const Blog = async () => {
  const blogs = await getPost('link-tags');
  console.log({ blogs });

  return <div>Blog</div>;
};

export default Blog;
