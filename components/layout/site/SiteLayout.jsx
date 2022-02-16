import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto mb-16 max-w-2xl px-8">{children}</main>
      <SiteFooter />
    </>
  )
}

export default SiteLayout
