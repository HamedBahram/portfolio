import NoteSummary from './NoteSummary'

const RecentNotes = ({ notes }) => {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Recent Notes</h2>
      {notes.map(meta => (
        <NoteSummary key={meta.slug} meta={meta} />
      ))}
    </section>
  )
}

export default RecentNotes
