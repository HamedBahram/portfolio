const handler = async (req, res) => {
    if (req.method === 'GET') {
        return res.status(200).json({ message: 'success' })
    }

    if (req.method === 'POST') {
        return res.status(200).json({ message: 'success' })
    }
}

export default handler
