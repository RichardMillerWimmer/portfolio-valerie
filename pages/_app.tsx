import Layout from '../components/Layout'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

import '../styles/reset.css'
import '../styles/globals.scss'
import '../styles/Projects.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp
