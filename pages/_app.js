import App, {Container} from 'next/app';
import React from 'react';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import createStore from '../store/store';
import 'bootstrap/scss/bootstrap.scss';
import '../styles/index.scss';
import Head from 'next/head';
import {setActiveRoute} from '../store/actions/routerActions';

class Root extends App {
    static async getInitialProps({Component, ctx, req}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ctx});
        }

        await ctx.store.dispatch(setActiveRoute(ctx.pathname));

        return {pageProps, query: ctx.query};
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Head>
                    <title>NRL</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                </Head>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(Root);
