import Link from 'next/link'
import NoteSummary from './NoteSummary'

const RecentNotes = ({ notes }) => {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold">Recent Notes</h2>
      <ul>
        {notes.map(meta => (
          <NoteSummary key={meta.slug} meta={meta} />
        ))}
      </ul>
      <Link href="/notes">
        <a className="underline decoration-react-link underline-offset-4">
          All Notes
        </a>
      </Link>
    </section>
  )
}

export default RecentNotes
