import React from 'react'
import styles from '../styles/ProjectCard.module.scss'

const ProjectCard: React.FC = (props: any) => {
    return (
        <div className={styles.cardContainer} {...props}></div>
    )
}

export default ProjectCard