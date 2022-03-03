import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem(key)
      if (value != null) {
        setState(JSON.parse(value))
      }
    }
  }, [key])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.parse(state))
    }
  }, [key, state])

  return [state, setState]
}

export default useLocalStorage
