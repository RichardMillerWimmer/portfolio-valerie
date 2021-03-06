import FeatureContainer from '../components/Feature/FeatureContainer'
import Hero from '../components/Hero'
import Landing from '../components/Landing'
import { createClient } from 'contentful'

export const client = createClient({ space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!, accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY! })


export default function Home() {

  return (
    <div>
      <Hero />
      <div>
        <Landing />
        <FeatureContainer />
      </div>
    </div>
  )
}
