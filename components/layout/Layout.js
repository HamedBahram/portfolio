import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Hamed Bahram - Web developer</title>
                <meta
                    name='description'
                    content='Full-stack developer, AI enthusiast, real estate lover'
                />
            </Head>
            <Header />
            <main className='max-w-2xl px-4 mx-auto mb-16'>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
