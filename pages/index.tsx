import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  )
}
