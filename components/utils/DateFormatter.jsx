const DateFormatter = ({ dateString, className }) => {
  return (
    <time className={className}>
      {new Date(dateString).toLocaleDateString('en-Ca', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })}
    </time>
  )
}

export default DateFormatter
