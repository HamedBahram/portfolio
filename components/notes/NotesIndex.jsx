import { useState } from 'react'
import NoteSummary from './NoteSummary'

const NotesIndex = ({ notes }) => {
  const [filter, setFilter] = useState('')

  const filtered = filter
    ? notes.filter(meta =>
        meta.title.toLowerCase().includes(filter.trim().toLowerCase())
      )
    : notes

  return (
    <section>
      <h1 className="mb-12 text-3xl font-bold">All Notes</h1>
      <div className="mb-8 flex items-center justify-between rounded-md bg-[#2b303b] py-1.5 pl-4 pr-2 focus-within:ring focus-within:ring-react-link dark:bg-[#282c34] dark:focus-within:ring-2">
        <input
          type="text"
          className="grow bg-transparent text-white outline-none  placeholder:text-gray-500"
          placeholder="Search Notes..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#fff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>
      <ul>
        {filtered.map(meta => (
          <NoteSummary key={meta.slug} meta={meta} />
        ))}
      </ul>
    </section>
  )
}

export default NotesIndex
