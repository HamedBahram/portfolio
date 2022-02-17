import ProjectSummary from './ProjectSummary'

const RecentProjects = ({ projects }) => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">Projects</h2>
      {projects.map(project => (
        <ProjectSummary key={project.slug} project={project} />
      ))}
    </section>
  )
}

export default RecentProjects
