import { useEffect, useState } from 'react'
import useRectSize from '@/hooks/useRectSize'
import useConfetti from '@/hooks/useConfetti'
import useLocalStorage from '@/hooks/useLocalStorage'
import { emailSchema } from '@/utils/validate'
import { ScaleLoader } from 'react-spinners'
import { css } from '@emotion/react'

const override = css`
  margin-bottom: -6px;
`

const Subscribe = () => {
  const [subscribed, setSubscribed] = useLocalStorage('subscribed', false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { canvasRef, confetti } = useConfetti()
  const { width, height, ref } = useRectSize()

  const [fade, setFade] = useState('h-52 sm:h-44')

  useEffect(() => {
    if (subscribed) {
      setFade('h-24')
    }
  }, [subscribed])

  const handleSubmit = async event => {
    try {
      event.preventDefault()

      const form = event.currentTarget
      const formData = new FormData(form)
      const email = formData.get('email')

      try {
        await emailSchema.validate(email)
      } catch (error) {
        throw new Error(error.errors[0])
      }

      setLoading(true)
      setError(null)

      const { error } = await fetch('/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      }).then(res => res.json())

      if (error) throw new Error(error)
      setSubscribed(true)
      setLoading(false)

      confetti({
        particleCount: 150,
        angle: 90,
        spread: 180,
        startVelocity: 18,
        gravity: 0.5,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#fff', '#0178df', '#20232a', '#ef4444'],
        scalar: 0.6
      })

      form.reset()
    } catch (error) {
      setFade('h-56 sm:h-48')
      setError(error)
      setLoading(false)
    }
  }

  return (
    <div
      ref={ref}
      className={`${fade} relative rounded-md bg-gradient-to-br from-react to-react-link p-8 transition-height duration-500`}
    >
      <div className="mb-5 text-white">
        {subscribed ? (
          <p className="text-lg font-bold">Thanks for subscribing!</p>
        ) : (
          <>
            <p className="text-xl font-bold">Subscribe to my newsletter</p>
            <p className="text-sm text-gray-400">
              Get updates on my new notes
            </p>
          </>
        )}
        {error && <p className="text-red-400">{error.message}</p>}
      </div>
      {!subscribed && (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 rounded-md focus-within:border-slate-300 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:border sm:border-slate-500 sm:p-1">
            <input
              type="text"
              name="email"
              className="grow rounded-md border border-slate-500 bg-transparent px-3 py-1 text-white outline-none placeholder:text-gray-500 focus-within:border-slate-300 sm:border-none"
              placeholder="your@email.com"
            />
            <button
              type="submit"
              className="flex h-8 items-center justify-center rounded-md bg-slate-800 px-5 py-1 font-medium tracking-wide text-white transition-colors hover:cursor-pointer hover:text-react-link disabled:cursor-not-allowed disabled:hover:text-white sm:w-32"
              disabled={loading}
            >
              {loading ? (
                <ScaleLoader
                  color="white"
                  height={15}
                  width={2}
                  radius={2}
                  margin={2}
                  css={override}
                />
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </form>
      )}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute top-0 left-0"
        width={width}
        height={height}
      ></canvas>
    </div>
  )
}

export default Subscribe
