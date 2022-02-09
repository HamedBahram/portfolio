import NoteSummary from './NoteSummary'

const RecentNotes = ({ notes }) => {
    return (
        <section className='mb-12'>
            <h2 className='text-2xl font-bold mb-6'>Recent Notes</h2>
            {notes.map(note => (
                <NoteSummary key={note.slug} note={note} />
            ))}
        </section>
    )
}

export default RecentNotes
