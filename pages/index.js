import Layout from '../components/layout/Layout'
import BlogPostSummary from '../components/BlogPostSummary'

const HomePage = () => {
    return (
        <Layout>
            <section className='mb-12'>
                <h1 className='text-3xl font-bold mb-6'>Hey, I&#39;m Hamed</h1>
                <p>
                    I&#39;m a developer, writer and creator. This is my digital nook where I write
                    about what I have learned and what I&#39;ve been working on.
                </p>
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
            </section>
        </Layout>
    )
}

export default HomePage
