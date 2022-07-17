import { NextPage } from 'next'
import { PublicationType } from '../pages/projects'
import ProjectCard from './ProjectCard'


const Publication: NextPage<PublicationType> = (props: any) => {
    const { title, authors, publication, link, image } = props.fields
    const body = props.fields.description.content[0].content[0].value

    // console.log(title, authors, publication, link, image, body)
    // console.log(props.fields)

    return (
        <ProjectCard>
            <article className='projectContent'>
                <h5 className='projectTitle'>{title}</h5>
                <div className='projectDescription'>
                    <p>{body}</p>
                    <p>{publication}</p>
                    <p>{authors}</p>
                    <p>{link}</p>
                    <p>{image}</p>
                </div>
            </article>
        </ProjectCard>
    )
}

export default Publication
