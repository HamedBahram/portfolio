import { useRef, useCallback } from 'react'
import confetti from 'canvas-confetti'

const useConfetti = () => {
  const confettiRef = useRef()
  const canvasRef = useCallback(node => {
    if (!node) return
    confettiRef.current = confettiRef.current || confetti.create(node)
  }, [])

  return {
    canvasRef,
    confetti: confettiRef.current
  }
}

export default useConfetti
