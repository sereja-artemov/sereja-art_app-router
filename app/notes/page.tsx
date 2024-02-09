import Note from '@/components/Note/Note';
import { getPosts } from '@/lib/getPosts';

export default async function Notes() {
  
  const notes = await getPosts('notes');
  const sortedNotes = notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );  
  
  return (
    <>
      <h1 className="block-title">Заметки</h1>
      <div className="inline-flex flex-wrap gap-2">
        {sortedNotes.map((note, index) => (
        note.published && <Note key={index} {...note} />

        ))}
      </div>
    </>
  )
}
