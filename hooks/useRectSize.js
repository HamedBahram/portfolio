import { useState, useEffect, useRef } from 'react'

const useRectSize = () => {
  const [state, setState] = useState({ width: 0, height: 0 })
  const ref = useRef()

  const resize = node => {
    if (!node) return
    setState({
      width: node.getBoundingClientRect().width,
      height: node.getBoundingClientRect().height
    })
  }

  useEffect(() => {
    const setSize = () => {
      resize(ref.current)
    }
    window.addEventListener('resize', setSize)
    resize(ref.current)
    return () => window.removeEventListener('resize', setSize)
  }, [])

  return { width: state.width, height: state.height, ref }
}

export default useRectSize
