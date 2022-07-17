import { NextPage } from 'next'
import { PresentationType } from '../pages/projects'
import ProjectCard from './ProjectCard'

const Presentation: NextPage<PresentationType> = (props: any) => {
    const { title, body, authors, given, image } = props.fields

    return (
        <ProjectCard>
            <article className='projectContent'>
                <h4 className='projectTitle'>{title}</h4>
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

export default Presentation