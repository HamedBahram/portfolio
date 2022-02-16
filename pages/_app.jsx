import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import SiteLayout from '@/components/layout/site/SiteLayout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ThemeProvider>
  )
}

export default MyApp
