import Link from 'next/link'
import ProjectIcon from './ProjectIcon'

const ProjectSummary = ({ project }) => {
  const { title, summary, slug, icon } = project

  return (
    <li>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="mb-4 flex items-center justify-between gap-4 rounded-md px-5 py-4 shadow-md transition-shadow duration-150 ease-in hover:shadow-slate-400 dark:bg-[#282c34] dark:hover:shadow-slate-700">
            <ProjectIcon icon={icon} />
            <div className="grow">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-500">{summary}</p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default ProjectSummary
