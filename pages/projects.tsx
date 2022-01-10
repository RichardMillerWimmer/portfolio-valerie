import React from 'react'
import { NextPage } from 'next'
import Project from '../components/Project'
import styles from '../styles/Projects.module.scss';
// import { client } from '../index'

type Author = string

export type ProjectType = {
    id: number,
    title: string,
    body: string,
    date: string,
    authors: Author[],
    journal: string,
    link: string,
    image: string,
    feature: boolean
}

const testData: ProjectType[] = [
    {
        id: 0,
        title: 'test title 1',
        body: 'test body 1',
        date: 'some date 1',
        authors: ['Val'],
        journal: 'journal 1',
        link: 'link 1',
        image: 'image 1',
        feature: false
    },
    {
        id: 1,
        title: 'test title 2',
        body: 'test body 3',
        date: 'some date 2',
        authors: ['Val'],
        journal: 'journal 2',
        link: 'link 2',
        image: 'image 2',
        feature: false
    },
    {
        id: 2,
        title: 'test title 3',
        body: 'test body 3',
        date: 'some date 3',
        authors: ['Val'],
        journal: 'journal 3',
        link: 'link 3',
        image: 'image 3',
        feature: false
    }
]


const Projects: NextPage = () => {

    return (
        <section className={styles.projectsContainer}>
            <div className={styles.boxshadow}>
                <h1>Projects</h1>
                <div>
                    <p>My work includes..."this is to be a larger section about the type of projects and potential highlighed projects"</p>
                </div>
                <div>
                    {testData.map((project) => (
                        <div key={project.id}>
                            <Project {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

// export async function getStaticProps() {

//     const res = await client.getEntries({ content_type: 'project' })

//     return {
//         props: {
//             project: res.items
//         }
//     }
// }