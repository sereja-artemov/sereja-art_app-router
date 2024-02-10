import { getPostFromSlug, getPosts } from '@/lib/getPosts';
import { PostType } from '@/lib/types';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
 
export const alt = ''
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { slug: string } }) {
  const post: PostType | undefined = getPostFromSlug(params.slug, 'blog');
  if (!post) notFound()
 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post.title}
      </div>
    ),
    {
      ...size,
    }
  )
}

