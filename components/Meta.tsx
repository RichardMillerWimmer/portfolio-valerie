import React from 'react'
import Head from 'next/head'

type MetaObj = {
    title: string,
    keywords: string,
    description: string
}

const Meta: React.FC<MetaObj> = (props) => {
    const { title, keywords, description } = props;
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Velerie-OTR-L',
    keywords: 'Occupational Therapy, Research, Sensory Processing',
    description: 'Valerie is an up-and-coming leader in sensory processing, disability, and inclusion. Active in research, community projects, and speaking.'
}

export default Meta;
