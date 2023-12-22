import { Note } from 'contentlayer/generated';
import Link from 'next/link';

export default function Note(note: Note) {
  return (
    <Link href={note.url}>
      <article className="inline-block text-base px-4 py-3 border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-xl">
        <h5>{note.title}</h5>
      </article>
    </Link>
  )
}
