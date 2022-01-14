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
    title: 'WebDev News',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev.'
}

export default Meta;
