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

// const testPublications: PublicationType[] = [
//     {
//         id: 0,
//         title: 'test title 1',
//         body: 'test body 1',
//         authors: 'Val',
//         publication: ['some publication 1'],
//         link: 'link 1',
//         image: 'image 1',
//         feature: false
//     },
//     {
//         id: 1,
//         title: 'test title 2',
//         body: 'test body 3',
//         authors: 'Val',
//         publication: ['some publication 2'],
//         link: 'link 2',
//         image: 'image 2',
//         feature: false
//     },
//     {
//         id: 2,
//         title: 'test title 3',
//         body: 'test body 3',
//         authors: 'Val',
//         publication: ['some publication 3'],
//         link: 'link 3',
//         image: 'image 3',
//         feature: false
//     }
// ]

// const testPresentations: PresentationType[] = [
//     {
//         id: 0,
//         title: 'test title 1',
//         body: 'test body 1',
//         given: ['date - conference'],
//         authors: 'Val',
//         image: 'image 1',
//         feature: false
//     },
//     {
//         id: 1,
//         title: 'test title 2',
//         body: 'test body 3',
//         given: ['date - conference'],
//         authors: 'Val',
//         image: 'image 2',
//         feature: false
//     },
//     {
//         id: 2,
//         title: 'test title 3',
//         body: 'test body 3',
//         given: ['date - conference'],
//         authors: 'Val',
//         image: 'image 3',
//         feature: false
//     }
// ]


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