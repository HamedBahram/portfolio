import { useState, useEffect } from 'react'
import Link from 'next/link'
import NavLink from '@/components/utils/NavLink'
import ThemeButton from '@/components/utils/ThemeButton'

const SiteHeader = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-10 mb-16  bg-white bg-opacity-95 py-6 dark:bg-react dark:bg-opacity-95">
      <nav className="mx-auto flex w-full max-w-2xl flex-row-reverse items-center justify-between px-6">
        {mounted && <ThemeButton />}
        <ul className="flex items-center justify-evenly gap-6 font-medium">
          <li>
            <NavLink href="/" className="transition hover:text-react-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/projects"
              className="transition hover:text-react-link"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/notes"
              className="transition hover:text-react-link"
            >
              Notes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
