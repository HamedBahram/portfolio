import Link from 'next/link'
import ProjectIcon from './ProjectIcon'

const ProjectSummary = ({ project }) => {
  const { title, summary, slug, icon } = project

  return (
    <li>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="mb-4 flex flex-col items-center gap-4 rounded-md px-5 py-5 shadow-md transition-shadow duration-150 ease-in hover:shadow-slate-400 dark:bg-[#282c34] dark:hover:shadow-slate-700 sm:h-32 sm:flex-row sm:items-center sm:justify-center sm:py-4">
            <ProjectIcon icon={icon} className="w-4/5 sm:w-1/4" />
            <div className="w-4/5 text-center sm:w-3/4 sm:text-left">
              <h3 className="mb-1.5 font-semibold">{title}</h3>
              <p className="text-gray-500">{summary}</p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default ProjectSummary
