import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='max-w-2xl px-8 mx-auto mb-16'>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
