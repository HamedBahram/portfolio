import ProjectFooter from '@/components/projects/ProjectFooter'
import ProjectHeader from '@/components/projects/ProjectHeader'
import ProjectMain from '@/components/projects/ProjectMain'
import Head from 'next/head'

const ProjectLayout = ({ meta, source }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <section>
        <ProjectHeader meta={meta} />
        <ProjectMain source={source} />
        <ProjectFooter />
      </section>
    </>
  )
}

export default ProjectLayout
