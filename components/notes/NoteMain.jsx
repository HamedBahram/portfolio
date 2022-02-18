import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/mdx/MDXComponents'
// import 'highlight.js/styles/atom-one-dark.css'

const NoteMain = ({ source }) => {
  return (
    <main className="prose max-w-none dark:prose-invert">
      <MDXRemote {...source} components={MDXComponents} />
    </main>
  )
}

export default NoteMain
