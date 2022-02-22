import ProjectLayout from '@/components/layout/projects/ProjectLayout'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects'

const Project = ({ meta, source }) => {
  return <ProjectLayout meta={meta} source={source} />
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { meta, source } = await getProjectBySlug(slug)

  return {
    props: {
      meta,
      source
    }
  }
}

export async function getStaticPaths() {
  const slugs = getAllProjectSlugs()
  const paths = slugs.map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default Project
