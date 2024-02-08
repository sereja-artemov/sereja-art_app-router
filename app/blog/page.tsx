import PostCard from '@/components/PostCard/PostCard';
import { getPosts } from '@/lib/getPosts';
import { allPosts } from 'contentlayer/generated';

export default async function Blog() {
  // const posts = allPosts.sort(
  //   (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  // );

  const posts = await getPosts('blog');
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );  

  return (
    <>
      <h1 className="block-title">Блог</h1>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
        {sortedPosts.map((post, index) => (
          post.published && <PostCard key={index} {...post} />
        ))}
      </div>

    </>
  );
}
