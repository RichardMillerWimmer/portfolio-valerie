import Document, { Head, Html, Main, NextScript } from "next/document";

import Favicon from '../components/Favicon';

class MyDocument extends Document {

    render(): JSX.Element {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name='description' content='Valerie Miller Ph.D. making a name for herself in the world of Occupational Therapy. Expertise includes sensory processing, pediatrics, community inclusion.' />
                    <Favicon />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;