import FeatureContainer from '../components/Feature/FeatureContainer'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'
import { createClient } from 'contentful'

export const client = createClient({ space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!, accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY! })


export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
        <FeatureContainer />
      </main>
    </div>
  )
}
