import React from 'react'
import Feature from './Feature'

export type FeatureType = {
    id: number,
    title: string,
    body: string,
    feature: boolean
}

const testData: FeatureType[] = [
    {
        id: 0,
        title: 'test title 1',
        body: 'test body 1',
        feature: false
    },
    {
        id: 1,
        title: 'test title 2',
        body: 'test body 1',
        feature: false
    }
]

const FeatureContainer: React.FC = () => {

    return (
        <section>
            {/* <Feature /> */}
            {/* <Feature /> */}
        </section>
    )
}

export default FeatureContainer
