import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const rootDirectory = path.join(process.cwd(), 'content', 'projects')

export const getProjectBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { data, content } = matter(fileContent)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
      ]
    }
  })

  const project = {
    meta: {
      ...data,
      slug: realSlug
    },
    source: mdxSource
  }

  return project
}

export const getProjectMeta = slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { data } = matter(fileContent)

  const meta = {
    ...data,
    slug: realSlug
  }

  return meta
}

export const getAllProjectsMeta = () => {
  const files = fs.readdirSync(rootDirectory)
  const projects = files
    .map(file => getProjectMeta(file))
    .sort((a, b) => a.index - b.index)
  return projects
}

export const getAllProjectSlugs = () => {
  const files = fs.readdirSync(rootDirectory)
  const slugs = files.map(file => file.replace(/\.mdx$/, ''))
  return slugs
}
