import React from 'react'

const Favicon = (): JSX.Element => {
    return (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            {/* TO_DO: fill out */}
            <meta name="apple-mobile-web-app-title" content="Snippit"/>
            <meta name="application-name" content="<APP NAME>"/>
            <meta name="msapplication-TileColor" content="#ffc40d"/>
            <meta name="theme-color" content="#ffffff"/>
        </>
    )
}

export default Favicon
