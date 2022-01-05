import FeatureContainer from '../components/Feature/FeatureContainer'
import Hero from '../components/Hero'
import Landing from '../components/Landing'
import styles from '../styles/Home.module.scss'
import { createClient } from 'contentful'

export const client = createClient({ space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!, accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY! })


export default function Home() {

  return (
    <div className={styles.container}>
      <Hero />
      <main className={styles.main}>
        <Landing />
        <FeatureContainer />
      </main>
    </div>
  )
}
