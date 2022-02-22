import Link from 'next/link'
import React from 'react'
import DateFormatter from '../utils/DateFormatter'

const ProjectsIndex = ({ projects }) => {
  return (
    <section>
      <h1 className="mb-12 text-3xl font-bold">All Projects</h1>
      <ul>
        {projects.map(meta => (
          <li key={meta.slug}>
            <Link href={`/projects/${meta.slug}`}>
              <a>
                <div className="mb-6 flex justify-between gap-4">
                  <div className="w-3/4">
                    <h4 className="font-semibold">{meta.title}</h4>
                    <p className="text-gray-500">{meta.summary}</p>
                  </div>
                  <DateFormatter
                    dateString={meta.date}
                    className="mt-1 w-1/4 text-right text-sm font-light text-gray-500"
                  />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsIndex
