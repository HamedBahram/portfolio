import Link from 'next/link'
import ProjectSummary from './ProjectSummary'

const RecentProjects = ({ projects }) => {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold">Recent Projects</h2>
      <ul className="mb-6">
        {projects.map(project => (
          <ProjectSummary key={project.slug} project={project} />
        ))}
      </ul>
      <Link href="/projects">
        <a className="underline decoration-react-link underline-offset-4">
          All Projects
        </a>
      </Link>
    </section>
  )
}

export default RecentProjects
