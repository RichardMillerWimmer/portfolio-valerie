import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section>
            <h1>Hero Component</h1>
            <div>
                <Image src='/Miller_Valerie.png' width='250' height='375'/>
                <h1>Valerie Miller PhD OTLR</h1>
            </div>
        </section>
    )
}

export default Hero
