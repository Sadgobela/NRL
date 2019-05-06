import React from 'react';
import Header from '../../fragments/header/Header';
import Footer from '../../fragments/footer/Footer';
import PropTypes from 'prop-types';
import {LAYOUT_TYPES} from '../../../utils/constants';
import './DefaultPageLayout.scss';

function DefaultPageLayout({children}) {
    return (
        <main className='default-layout'>
            <Header layoutType={LAYOUT_TYPES.default}/>
            {children}
            <Footer/>
        </main>
    );
}

DefaultPageLayout.propTypes = {
    children: PropTypes.node
};

export default DefaultPageLayout;