import PropTypes from 'prop-types'
import { NextPage } from 'next'
import { PresentationType } from '../pages/projects'

const Presentation: NextPage<PresentationType> = (props: any) => {
    const { title, body, authors, given, image, feature } = props.fields

    return (
        <article>
            <h4>{title}</h4>
            <p>{body}</p>
            <p>{given}</p>
            <p>{authors}</p>
            <p>{image}</p>
        </article>
    )
}

Presentation.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    given: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    authors: PropTypes.string.isRequired,
    image: PropTypes.string,
    feature: PropTypes.bool.isRequired
}

export default Presentation