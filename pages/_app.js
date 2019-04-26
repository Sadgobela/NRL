import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import createStore from '../store/store';
import 'bootstrap/scss/bootstrap.scss';
import '../styles/index.scss';
import Head from 'next/head';
class Root extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        return { pageProps};
    }

    render() {
        const { Component, pageProps, store, t } = this.props;
        return (
            <Container>
                <Head>
                    <title>NRL</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    {/*<link rel="shortcut icon" href="/static/img/fav.png" />*/}
                </Head>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

const options = { trickleSpeed: 50, showSpinner: false };

export default withRedux(createStore)(Root);
