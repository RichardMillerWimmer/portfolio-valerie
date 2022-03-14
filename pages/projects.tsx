import { NextPage } from 'next'
import Publication from '../components/Publication'
import Presentation from '../components/Presentation'
import styles from '../styles/Projects.module.scss'
import { client } from './index'

export type PublicationType = {
    id: number,
    title: string,
    body: string,
    authors: string,
    publication: string[],
    link?: string,
    image?: string,
    feature: boolean
}

export type PresentationType = {
    id: number,
    title: string,
    body: string,
    given: string[],
    authors: string,
    image?: string,
    feature: boolean
}

type ProjectType = {
    presentations: PresentationType[],
    publications: PublicationType[]
}

const Projects: NextPage<ProjectType> = (props: any) => {
    const { publications, presentations } = props
    console.log(publications)

    return (
        <>
            <section className={styles.projectsContainer}>
                <h2 className='visualHidden'>Projects</h2>
                <p>For a full list including: publications, presentations, grants, professional development, memberships, service projects, and licenses please see my CV</p>
            </section>
            <h3>Publications</h3>
            <div>
                {publications.items.map((publication: PublicationType) => (
                    <div key={publication.id}>
                        <Publication {...publication} />
                    </div>
                ))}
            </div>
            <h3>Presentations</h3>
            <div>
                {presentations.items.map((presentation: PresentationType) => (
                    <div key={presentation.id}>
                        <Presentation {...presentation} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects

export async function getStaticProps() {

    const publications = await client.getEntries({ content_type: 'publication' })
    const presentations = await client.getEntries({ content_type: 'presentation' })

    return {
        props: {
            publications: publications,
            presentations: presentations
        }
    }
}