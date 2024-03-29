// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <html>
                <Head title="NRL"/>
                <body className=''>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}
