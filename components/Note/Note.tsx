import { Note } from 'contentlayer/generated';
import Link from 'next/link';

export default function Note(note: Note) {
  return (
    <Link href={note.url}>
      <article className="inline-block px-4 py-3 text-base border shadow-sm block-bg border-blockBorderColorLight dark:border-blockBorderColorDark rounded-xl">
        <h5>{note.title}</h5>
      </article>
    </Link>
  )
}
