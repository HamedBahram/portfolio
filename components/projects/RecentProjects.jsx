import ProjectSummary from './ProjectSummary'

const RecentProjects = ({ projects }) => {
    return (
        <section>
            <h2 className='text-2xl font-bold mb-6'>Projects</h2>
            {projects.map(project => (
                <ProjectSummary key={project.slug} project={project} />
            ))}
        </section>
    )
}

export default RecentProjects
