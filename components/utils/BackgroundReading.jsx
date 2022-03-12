import Link from 'next/link'

const BackgroundReading = ({ href, title, children }) => {
  return (
    <div className="flex max-w-max flex-col gap-1 rounded-md bg-gray-200 bg-opacity-75 px-5 py-4 text-sm dark:bg-react-link dark:bg-opacity-20 sm:flex-row sm:gap-4">
      <span className="text-gray-500">{title}</span>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </div>
  )
}

export default BackgroundReading
