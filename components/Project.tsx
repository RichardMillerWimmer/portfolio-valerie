import PropTypes from 'prop-types'
import { NextPage } from 'next'
import { ProjectType } from '../pages/projects'

const Project: NextPage<ProjectType> = (props: ProjectType): JSX.Element => {

    const { title, date, authors, journal, link, image } = props

    return (
        <article>
            <h4>{title}</h4>
            <p>{date}</p>
            <p>{authors}</p>
            <p>{journal}</p>
            <p>{link}</p>
            <p>{image}</p>
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
