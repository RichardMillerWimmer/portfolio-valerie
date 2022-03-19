import PropTypes from 'prop-types'
import { NextPage } from 'next'
import { PresentationType } from '../pages/projects'
import ProjectCard from './ProjectCard'


const Presentation: NextPage<PresentationType> = (props: any) => {
    const { title, body, authors, given, image } = props.fields

    return (
        <ProjectCard>
            <article className='projectContent'>
                <h5 className='projectTitle'>{title}</h5>
                <div className='projectDescription'>
                    <p>{body}</p>
                    <p>{given}</p>
                    <p>{authors}</p>
                    <p>{image}</p>
                </div>
            </article>
        </ProjectCard>
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