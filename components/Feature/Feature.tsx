import React from 'react'
import Image from 'next/image'
import FeatureType from './FeatureContainer'

const Feature: React.FC<FeatureType> = (props: FeatureType): JSX.Element => {
    return (
        <div>
            <h4>Title</h4>
            <p>Body</p>
            {/* <Image src={''} alt='' width={0} height={0}/> */}
        </div>
    )
}

export default Feature
