import React from 'react'
import Image from 'next/image'

type Feature = {
    title: string,
    body: string
}

const Feature: React.FC<Feature> = (props: Feature) => {
    return (
        <div>
            <h4>Title</h4>
            <p>Body</p>
            {/* <Image src={''} alt='' width={0} height={0}/> */}
        </div>
    )
}

export default Feature
