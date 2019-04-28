import React from 'react';
import './EventDetailPage.scss';
import DefaultPageLayout from "../../components/layouts/default/DefaultPageLayout";
import PropTypes from 'prop-types';
import {getSearchData} from "../../store/actions/searchActions";
function EventDetailPage({event}) {
    return (
        <DefaultPageLayout>
            {event && <div>
                <h1>{event.title}</h1>
                <p>{event.description}</p>
            </div>}

            {!event && <div>
                Not found
            </div>}
        </DefaultPageLayout>
    )
}


EventDetailPage.getInitialProps = async ({ctx}) => {
    let data = ctx.store.getState().search.data;
    if(!data){
        data = await ctx.store.dispatch(getSearchData()).payload;
    }
    console.log(ctx.query);
    const event = data.find(event => event.id === parseInt(ctx.query.id));

    return {event}
};

export default EventDetailPage;