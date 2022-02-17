import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const SiteHeader = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const { theme, resolvedTheme, setTheme } = useTheme()
  useEffect(() => {
    resolvedTheme && setTheme(resolvedTheme)
  }, [resolvedTheme, setTheme])

  return (
    <header className="sticky top-0 z-10 mb-12 bg-white bg-opacity-95 py-7 px-4 dark:bg-react dark:bg-opacity-95">
      <nav className="mx-auto flex w-full max-w-2xl flex-row-reverse items-center justify-between px-8">
        {mounted && (
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="h-10 w-10 rounded border border-gray-300 p-3"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-icon="sun"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {theme === 'dark' ? (
                <path
                  fill="#fbbf24"
                  d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                ></path>
              ) : (
                <path
                  fill="#20232a"
                  d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                ></path>
              )}
            </svg>
          </button>
        )}
        <ul className="flex items-center justify-evenly gap-4">
          <li>
            <Link href="/">
              <a className="transition hover:text-react-link focus:text-react-link">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="transition hover:text-react-link focus:text-react-link">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/notes">
              <a className="transition-colors hover:text-react-link focus:text-react-link">
                Notes
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
