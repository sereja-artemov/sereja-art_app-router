import PostCard from '@/components/PostCard/PostCard';
import { allPosts } from 'contentlayer/generated';
// ^ You're probably going to get an error, but we'll fix it later
// import PostCard from './components/PostCard';

export default function Blog() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-xl py-8 mx-auto">
      <h1 className="mb-8 text-2xl font-black text-center">
        Next.js + Contentlayer Example
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
