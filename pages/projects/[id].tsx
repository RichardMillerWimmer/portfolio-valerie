import React from 'react'
import PropTypes from 'prop-types'
import { NextPage } from 'next'
import { ProjectType } from './index'

const Project: NextPage<ProjectType> = (props: ProjectType): JSX.Element => {


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

Project.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    journal: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    feature: PropTypes.bool.isRequired
}

export default Project
