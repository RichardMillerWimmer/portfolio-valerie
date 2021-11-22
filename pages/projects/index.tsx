import { NextPage } from 'next'
import React from 'react'
import Project from './[id]'
// import Project from '../components/Project'

type Author = string

export type ProjectType = {
    id: number,
    title: string, 
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
        date: 'some date 2',
        authors: ['Val'], 
        journal: 'journal 2', 
        link: 'link 2',
        image: 'image 2',
        feature: false
    }
]


const Projects: NextPage = () => {

    return (
        <section>
            <h1>Projects Component</h1>
            <div>
                {testData.map((project) => (
                    <div key={project.id}>
                        <Project {...project}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
