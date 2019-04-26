import React from 'react';
import Header from "../../fragments/header/Header";
import PropTypes from "prop-types";
import './HomePageLayout.scss';
import {LAYOUT_TYPES} from "../../../utils/constants";

function HomePageLayout({children}) {
    return (
        <main className='homepage-layout'>
            <Header layoutType={LAYOUT_TYPES.home}/>
            {children}
        </main>
    )
}

HomePageLayout.propTypes = {
    children: PropTypes.node
};

export default HomePageLayout;