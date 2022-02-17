const handler = async (req, res) => {
  const { slug } = req.query

  if (req.method === 'GET') {
    return res.status(200).json({ slug })
  }

  if (req.method === 'POST') {
    return res.status(200).json({ slug })
  }
}

export default handler
