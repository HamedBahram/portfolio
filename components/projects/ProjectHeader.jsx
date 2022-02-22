import DateFormatter from '../utils/DateFormatter'

const ProjectHeader = ({ meta }) => {
  const { title, slug, date } = meta

  return (
    <header className="mb-12">
      <h1 className="mb-4 text-3xl font-bold lg:text-4xl">{title}</h1>
      <div className="flex items-center gap-2 text-sm font-light text-zinc-400">
        <div className="flex grow flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <DateFormatter dateString={date} />
          </div>

          <div className="flex items-center gap-1"></div>
        </div>
      </div>
    </header>
  )
}

export default ProjectHeader
