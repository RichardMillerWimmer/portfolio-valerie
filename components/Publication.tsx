import PropTypes from 'prop-types'
import { NextPage } from 'next'
import { PublicationType } from '../pages/projects'

const Publication: NextPage<PublicationType> = (props: any) => {
    const { title, authors, publication, link, image } = props.fields
    const body = props.fields.description.content[0].content[0].value

    return (
        <article>
            <h4>{title}</h4>
            <p>{body}</p>
            <p>{publication}</p>
            <p>{authors}</p>
            <p>{link}</p>
            <p>{image}</p>
        </article>
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
