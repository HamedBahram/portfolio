import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/mdx/MDXComponents'
import 'highlight.js/styles/atom-one-dark.css'


const NoteMain = ({ source }) => {
  return (
    <main className="prose prose-a:no-underline prose-pre:!p-0 dark:prose-invert max-w-none">
      <MDXRemote {...source} components={MDXComponents} />
    </main>
  )
}

export default NoteMain
