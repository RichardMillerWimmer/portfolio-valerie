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
        body: 'test body 2',
        feature: false
    },
    {
        id: 2,
        title: 'test title 3',
        body: 'test body 3',
        feature: false
    }
]

const FeatureContainer: React.FC = () => {

    return (
        <section>
            {testData.map((elem) => (
                <Feature {...elem} key={elem.id} />
            ))}
        </section>
    )
}

export default FeatureContainer
