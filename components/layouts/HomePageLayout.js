import React from 'react';
import Header from "../fragments/header/Header";
import PropTypes from "prop-types";

class HomePageLayout extends React.Component{
    render() {
        const { children } = this.props;
        return(
            <main className='homepage-layout'>
                <Header/>
                {children}
            </main>
        )
    }
}

HomePageLayout.propTypes = {
    children: PropTypes.node
};

export default HomePageLayout;