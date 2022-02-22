import NotesIndex from '@/components/notes/NotesIndex'
import { getAllNotesMeta } from '@/lib/notes'

const Notes = ({ notes }) => {
  return <NotesIndex notes={notes} />
}

export async function getStaticProps() {
  const notes = getAllNotesMeta()

  return {
    props: {
      notes
    }
  }
}

export default Notes
