import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import BlogPostSummary from '@/components/blog/BlogPostSummary'
import ProjectSummary from '@/components/projects/ProjectSummary'
import profilePic from '../public/me.jpg'

const HomePage = () => {
    return (
        <Layout>
            <section className='mb-12 flex flex-col-reverse items-start md:flex-row gap-8'>
                <div className='flex-1'>
                    <h1 className='text-3xl font-bold mb-6'>
                        Hey, I&#39;m Hamed{' '}
                        <span className='text-xl font-light text-react-link text-opacity-70'>
                            /hə.med/
                        </span>
                    </h1>
                    <p>
                        Welcome to my nook. I document things I&#39;m learning and stuff I kind of
                        figured out, stuff I&#39;ve been working on and struggles along the way.
                    </p>
                </div>
                <Image
                    className='rounded-full flex-1'
                    src={profilePic}
                    alt='Picture of the author'
                    width={125}
                    height={125}
                />
            </section>

            <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-6'>Recent Posts</h2>
                <BlogPostSummary
                    title='Everything I know about ExpressJS'
                    summary='From zero to hero in building a server with ExpressJS'
                    slug='everything-expressjs'
                />
                <BlogPostSummary
                    title='Everything I know about ExpressJS'
                    summary='From zero to hero in building a server with ExpressJS'
                    slug='everything-expressjs'
                />
                <BlogPostSummary
                    title='Everything I know about ExpressJS'
                    summary='From zero to hero in building a server with ExpressJS'
                    slug='everything-expressjs'
                />
                <BlogPostSummary
                    title='Everything I know about ExpressJS'
                    summary='From zero to hero in building a server with ExpressJS'
                    slug='everything-expressjs'
                />
            </section>

            <section>
                <h2 className='text-2xl font-bold mb-6'>Projects</h2>
                <ProjectSummary
                    title='ReactJS'
                    summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quasi autem placeat unde ducimus tempore?'
                    slug='reactjs'
                    icon='reactjs'
                />
                <ProjectSummary
                    title='NextJS'
                    summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quasi autem placeat unde ducimus tempore?'
                    slug='nextjs'
                    icon='nextjs'
                />
                <ProjectSummary
                    title='NodeJS'
                    summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quasi autem placeat unde ducimus tempore?'
                    slug='nodejs'
                    icon='nodejs'
                />
                <ProjectSummary
                    title='MongoDB'
                    summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quasi autem placeat unde ducimus tempore?'
                    slug='mongodb'
                    icon='mongodb'
                />
                <ProjectSummary
                    title='JavaScript'
                    summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quasi autem placeat unde ducimus tempore?'
                    slug='javascript'
                    icon='javascript'
                />
                <ProjectSummary
                    title='ExpressJS'
                    summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quasi autem placeat unde ducimus tempore?'
                    slug='expressjs'
                    icon='expressjs'
                />
            </section>
        </Layout>
    )
}

export default HomePage
