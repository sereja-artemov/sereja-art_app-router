import Note from '@/components/Note/Note';
import { allNotes } from 'contentlayer/generated';

export default function Notes() {
  const notes = allNotes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <>
      <h1 className="block-title">Заметки</h1>
      <div className="inline-flex flex-wrap gap-2">
        {notes.map((note) => (
        note.published && <Note key={note._id} {...note} />

        ))}
      </div>
    </>
  )
}
