import React, {useEffect} from 'react';
import DefaultPageLayout from "../../components/layouts/default/DefaultPageLayout";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getSearchData} from "../../store/actions/searchActions";
import EventItem from "./component/EventItem";
import {Container, Row} from "reactstrap";
import './SanJose.scss';

function SanJose({data, isPending}) {

    // useEffect(() => {
    //     if(!data){
    //         getSearchData();
    //     }
    // }, [data]);

    return (
        <DefaultPageLayout>
           <div className='jan-jose-page'>
               <Container>
                   <div className="main-poster">
                       <img src="/static/img/main-poster.png" alt=""/>
                   </div>
                   <Row>
                       {data && data.map(event => <EventItem key={event.id} event={event}/>)}
                   </Row>
               </Container>
           </div>
        </DefaultPageLayout>
    )
}

SanJose.getInitialProps = async ({ctx}) => {
    const data = ctx.store.getState().search.data;
    if(!data){
        await ctx.store.dispatch(getSearchData());
    }
};

const mapStateToProps = state => ({
    data: state.search.data,
});

export default connect(mapStateToProps)(SanJose);