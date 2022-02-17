import NoteLayout from '@/components/layout/notes/NoteLayout'
import { getAllSlugs, getNoteBySlug } from '@/lib/notes'

const Note = ({ meta, source }) => {
  return <NoteLayout meta={meta} source={source} />
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { meta, source } = await getNoteBySlug(slug)

  return {
    props: {
      meta,
      source
    }
  }
}

export async function getStaticPaths() {
  const slugs = getAllSlugs()
  const paths = slugs.map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default Note
