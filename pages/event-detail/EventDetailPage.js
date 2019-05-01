import React from 'react';
import DefaultPageLayout from "../../components/layouts/default/DefaultPageLayout";
import PropTypes from 'prop-types';
import {getSearchData} from "../../store/actions/searchActions";
import {Link} from '../../routes';
import './EventDetailPage.scss';

function EventDetailPage({event}) {
  return (
    <DefaultPageLayout>
      <div className="event-details-page">
        <div className="return-btn-wrapper">
          <Link route="/san-jose">
            <a href="/san-jose">
              <img src="/static/img/arrow_back.png" alt="back"/>
            </a>
          </Link>
        </div>
        {event && <div className="event-details">
          <div className="event-poster d-flex justify-content-center">
            <h1 className="poster-title my-auto">{event.title}</h1>
          </div>
          <div className="event-body">
            <h2 className="event-title">{event.title}</h2>
            <p> <em>{event.date}</em></p>
            <p><img src="/static/img/pin.svg" width={15} alt={event.title}/> {event.location}</p>
            <div dangerouslySetInnerHTML={{__html: event.description}}/>
            <button className="btn btn-primary btn-lg" type="button">
              <span>Register</span>
            </button>
          </div>
        </div>}

        {!event && <div>
          Not found
        </div>}
      </div>
    </DefaultPageLayout>
  )
}


EventDetailPage.getInitialProps = async ({ctx}) => {
  let data = ctx.store.getState().search.data;
  if (!data) {
    data = await ctx.store.dispatch(getSearchData()).payload;
  }
  const event = data.find(event => event.id === parseInt(ctx.query.id));

  return {event}
};

EventDetailPage.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventDetailPage;