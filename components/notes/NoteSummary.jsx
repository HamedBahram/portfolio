import Link from 'next/link'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

const NoteSummary = ({ meta }) => {
  const { title, excerpt, slug } = meta
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = Number(data ? data.viewCount : 0)

  return (
    <Link href={`/notes/${slug}`}>
      <a>
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm font-light text-gray-500">
              {`${views > 0 ? views.toLocaleString() : '---'} views`}
            </p>
          </div>
          <p className="text-gray-500">{excerpt}</p>
        </div>
      </a>
    </Link>
  )
}

export default NoteSummary
