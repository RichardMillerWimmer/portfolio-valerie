import React from 'react'
import Footer from './Footer';

import Meta from './Meta';
import Nav from './Nav';

const Layout: React.FC = () => {
    const layoutMeta = {title: 'Vals Page', keywords: 'Occupational Therapist, OT, Autism', description: ''}
    
    return (
        <>
            <Meta {...layoutMeta}/>
            <div>
                <Nav />

                <Footer />
            </div>
        </>
    )
}

export default Layout
