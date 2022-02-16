import Intro from '@/components/home/Intro'
import RecentNotes from '@/components/notes/RecentNotes'
import RecentProjects from '@/components/projects/RecentProjects'
import { getAllNotesMeta } from '@/lib/notes'

import { projects } from 'data/dummy'

const Home = ({ notes }) => {
  return (
    <>
      <Intro />
      <RecentNotes notes={notes} />
      <RecentProjects projects={projects} />
    </>
  )
}

export async function getStaticProps() {
  const notes = getAllNotesMeta()

  return {
    props: {
      notes
    }
  }
}

export default Home
