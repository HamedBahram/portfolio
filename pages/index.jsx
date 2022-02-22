import Intro from '@/components/home/Intro'
import RecentNotes from '@/components/notes/RecentNotes'
import RecentProjects from '@/components/projects/RecentProjects'
import { getAllNotesMeta } from '@/lib/notes'
import { getAllProjectsMeta } from '@/lib/projects'

const Home = ({ notes, projects }) => {
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
  const projects = getAllProjectsMeta()

  return {
    props: {
      notes: notes.slice(0, 5),
      projects: projects.slice(0, 3)
    }
  }
}

export default Home
