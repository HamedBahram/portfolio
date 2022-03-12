import { useState, useEffect } from 'react'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

const ViewCounter = ({ slug, className = '' }) => {
  const [views, setViews] = useState(0)
  const { data } = useSWR(`/api/views/${slug}`, fetcher)

  useEffect(() => {
    if (!data) return
    setViews(data.viewCount)
  }, [data])

  useEffect(() => {
    if (!slug) return

    const registerView = async () => {
      if (process.env.NODE_ENV !== 'production') {
        return
      }

      try {
        const { viewCount } = await fetch(`/api/views/${slug}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())

        if (viewCount) {
          setViews(viewCount)
        }
      } catch (error) {
        return
      }
    }

    registerView()
  }, [slug])

  return (
    <span className={className}>
      {views > 0 ? views.toLocaleString() : '---'} views
    </span>
  )
}

export default ViewCounter
