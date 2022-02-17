import { addView, getViews } from '@/utils/mongodb'

const handler = async (req, res) => {
  const { slug } = req.query

  if (req.method === 'GET') {
    try {
      const { viewCount, error } = await getViews(slug)
      if (error) throw error
      return res.status(200).json({ viewCount })
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.message || 'Failed to fetch view count' })
    }
  }

  if (req.method === 'POST') {
    try {
      const { viewCount, error } = await addView(slug)
      if (error) throw error
      return res.status(201).json({ viewCount })
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.message || 'Failed to increment view count' })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
