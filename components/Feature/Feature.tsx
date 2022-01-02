import React from 'react'
// import Image from 'next/image'
import { FeatureType } from './FeatureContainer'

const Feature: React.FC<FeatureType> = (props: FeatureType): JSX.Element => {
    // console.log(props)

    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
        </div>
    )
}

export default Feature
