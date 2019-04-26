import React from 'react';
import Header from "../fragments/header/Header";
import Footer from "../fragments/footer/Footer";
import PropTypes from 'prop-types';

class DefaultPageLayout extends React.Component{
    render() {
        const { children } = this.props;
        return(
            <main className='default-layout'>
                <Header/>
                    {children}
                <Footer/>
            </main>
        )
    }
}

DefaultPageLayout.propTypes = {
    children: PropTypes.node
};

export default DefaultPageLayout;