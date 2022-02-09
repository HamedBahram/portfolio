import Hero from '@/components/home/Hero'
import RecentNotes from '@/components/notes/RecentNotes'
import RecentProjects from '@/components/projects/RecentProjects'

import { notes, projects } from 'data/dummy'

const Home = () => {
    return (
        <>
            <Hero />
            <RecentNotes notes={notes} />
            <RecentProjects projects={projects} />
        </>
    )
}

export default Home
