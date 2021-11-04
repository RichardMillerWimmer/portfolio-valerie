import React from 'react'

type Project = {
    title: string,
    authors: string[],
    date: string,
    location: string,
    image: string,
    body: string
}

const Project: React.FC<Project> = (props: Project) => {

    console.log(props)

    return (
        <div>
            <h3>Project</h3>
            <h4>Title</h4>
            <h6>Authors</h6>
            <p>Date</p>
            <p>Location</p>
            <p>Image</p>
            <p>Body</p>
        </div>
    )
}

export default Project
