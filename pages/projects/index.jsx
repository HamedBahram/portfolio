import ProjectsIndex from '@/components/projects/ProjectsIndex'
import { getAllProjectsMeta } from '@/lib/projects'

const Projects = ({ projects }) => {
  return <ProjectsIndex projects={projects} />
}

export async function getStaticProps() {
  const projects = getAllProjectsMeta()

  return {
    props: {
      projects
    }
  }
}

export default Projects
