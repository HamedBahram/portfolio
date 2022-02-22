import { useTheme } from 'next-themes'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex h-10 w-10 items-center justify-center rounded border border-gray-300 bg-react p-2.5 dark:p-3"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon="sun"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="24px"
          height="24px"
        >
          <path
            fill="#fbbf24"
            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#cbd5e1"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g>
              <path d="M15.5,22c1.05,0,2.05-0.16,3-0.46c-4.06-1.27-7-5.06-7-9.54s2.94-8.27,7-9.54C17.55,2.16,16.55,2,15.5,2 c-5.52,0-10,4.48-10,10S9.98,22,15.5,22L15.5,22z" />
            </g>
          </g>
        </svg>
      )}
    </button>
  )
}

export default ThemeButton
