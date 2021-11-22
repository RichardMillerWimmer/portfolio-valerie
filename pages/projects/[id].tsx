import { NextPage } from 'next'
import React from 'react'
import { ProjectType } from './index'

const Project: NextPage<ProjectType> = (props: ProjectType):JSX.Element => {


    return (
        <article>
            <h4>{props.title}</h4>
            <p>{props.date}</p>
            <p>{props.authors}</p>
            <p>{props.journal}</p>
            {/* image/Link */}
        </article>
    )
}

export default Project
