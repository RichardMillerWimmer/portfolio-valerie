import { NextPage } from 'next'
import React from 'react'
// import Project from '../components/Project'

type Author = {
    name: string
}

type Project = {
    title: string, 
    date: string,
    authors: Author[], 
    journal: string, 
    link: string,
    image: string
}

const testData = [
    {
        title: 'test title 1', 
        date: 'some date 1',
        authors: ['Val'], 
        journal: 'journal 1', 
        link: 'link 1',
        image: 'image 1'
    },
    {
        title: 'test title 2', 
        date: 'some date 2',
        authors: ['Val'], 
        journal: 'journal 2', 
        link: 'link 2',
        image: 'image 2'
    }
]


const Projects: NextPage = () => {
    
    return (
        <div>
            <h1>Projects Component</h1>
            <div>
                {/* <Project /> */}
                {/* <Project /> */}
            </div>
        </div>
    )
}

export default Projects
