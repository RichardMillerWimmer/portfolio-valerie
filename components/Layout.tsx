import React from 'react'
import Footer from './Footer';

import Meta from './Meta';
import Nav from './Nav/Nav';

const Layout: React.FC = (props) => {
    const layoutMeta = {title: 'Vals Page', keywords: 'Occupational Therapist, OT, Autism', description: ''}
    
    return (
        <>
            <Meta {...layoutMeta}/>
            <div>
                <Nav />
                    {props.children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
