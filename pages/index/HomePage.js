import React from 'react';
import HomePageLayout from "../../components/layouts/home/HomePageLayout";
import './HomePage.scss';

// import PropTypes from 'prop-types';
function HomePage() {
  return (
    <HomePageLayout>
      <div className="search-input">
        <img src="/static/img/background1.png" alt=""/>
      </div>
    </HomePageLayout>
  )
}

export default HomePage;