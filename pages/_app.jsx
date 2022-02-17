import SiteLayout from '@/components/layout/site/SiteLayout'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'

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
