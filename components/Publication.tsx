import PropTypes from 'prop-types'
import { NextPage } from 'next'
import { PublicationType } from '../pages/projects'
import CardProjects from './ProjectCard'




const Publication: NextPage<PublicationType> = (props: any) => {
    const { title, authors, publication, link, image } = props.fields
    const body = props.fields.description.content[0].content[0].value

    return (
        <CardProjects>
            <article className='projectContent'>
                <h5>{title}</h5>
                <p>{body}</p>
                <p>{publication}</p>
                <p>{authors}</p>
                <p>{link}</p>
                <p>{image}</p>
            </article>
        </CardProjects>
    )
}

Publication.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    publication: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    authors: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    feature: PropTypes.bool.isRequired
}

export default Publication
