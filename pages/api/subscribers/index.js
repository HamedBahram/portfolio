import { addSubscriber } from '@/utils/mongodb'
import { emailSchema } from '@/utils/validate'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      return res.status(200).json({ message: 'success' })
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.message || 'Failed to fetch subscribers' })
    }
  }

  if (req.method === 'POST') {
    const { email } = req.body
    try {
      await emailSchema.validate(email)
    } catch (error) {
      return res.status(400).json({ error: error.errors[0] })
    }

    // REVUE
    // try {
    //   const URL = `https://www.getrevue.co/api/v2/subscribers`
    //   const API_KEY = process.env.REVUE_API_KEY
    //   const response = await fetch(URL, {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Token ${API_KEY}`,
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ email })
    //   })
    //   const result = await response.json()
    //   if (!response.ok) {
    //     throw new Error(result.error.email[0])
    //   }
    //   return res.status(201).json({ error: '' })
    // } catch (error) {
    //   return res
    //     .status(500)
    //     .json({
    //       error: error.message || 'Something went wrong! please try again.'
    //     })
    // }

    // MONGODB
    try {
      const { subscriber, error } = await addSubscriber(email)
      if (error) throw new Error('Something went wrong! please try again.')
      return res.status(201).json({ subscriber })
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Something went wrong! please try again.' })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
