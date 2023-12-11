import PostCard from '@/components/PostCard/PostCard';
import { allPosts } from 'contentlayer/generated';
// ^ You're probably going to get an error, but we'll fix it later
// import PostCard from './components/PostCard';

export default function Blog() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <h1 className="block-title">Блог</h1>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
        {posts.map((post, index) => (
          post.published && <PostCard key={index} {...post} />
        ))}
      </div>

    </>
  );
}
