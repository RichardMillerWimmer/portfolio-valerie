import React from 'react'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

import '../styles/reset.css'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
