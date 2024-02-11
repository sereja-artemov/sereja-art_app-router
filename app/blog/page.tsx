import PostCard from '@/components/PostCard/PostCard';
import { getPosts } from '@/lib/getPosts';
import { notFound } from 'next/navigation';

export default async function Blog() {
  const posts = await getPosts('blog');
  if (!posts) return notFound()

  return (
    <>
      <h1 className="block-title">Блог</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {posts?.map(
          (post, index) => post.published && <PostCard key={index} {...post} />
        )}
      </div>
    </>
  );
}
