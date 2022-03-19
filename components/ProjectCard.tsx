import React from 'react'
import { Card, CardContent } from '@mui/material'
import styles from '../styles/ProjectCard.module.scss'

const ProjectCard: React.FC = (props: any) => {
    return (
        <div className={styles.cardContainer}>
            <Card elevation={10}>
                {props.children}
            </Card>
        </div>
    )
}

export default ProjectCard