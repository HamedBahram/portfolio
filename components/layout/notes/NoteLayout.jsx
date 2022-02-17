import NoteMain from '@/components/notes/NoteMain'
import NoteFooter from '@/components/notes/NoteFooter'
import NoteHeader from '@/components/notes/NoteHeader'
import Head from 'next/head'

const NoteLayout = ({ meta, source }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <NoteHeader meta={meta} />
        <NoteMain source={source} />
        <NoteFooter />
      </article>
    </>
  )
}

export default NoteLayout
