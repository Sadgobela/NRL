import React, {useState} from 'react';
import Pagination from '../../../components/fragments/pagination/Pagination';
import EventItem from './EventItem';
import {Row} from 'reactstrap';
import PropTypes from 'prop-types';

function Events({events}) {
    const [search, setSearch] = useState(Events.initialSearchState);

    const onPageChange = (page) => {
        setSearch({...search, page});
    };

    if (!events) return null;

    const pages = Math.ceil(events.length / search.perPage);
    const sliceEnd = (search.page * search.perPage);
    const sliceStart = sliceEnd - search.perPage;
    return (
        <div className="events">
            <Row>
                {events
                    .slice(sliceStart, sliceEnd)
                    .map(event => <EventItem key={event.id} event={event}/>)}
            </Row>
            <div className="d-flex justify-content-center mt-3">
                <Pagination onChange={onPageChange} pages={pages} page={search.page}/>
            </div>
        </div>
    );
}

Events.propTypes = {
    events: PropTypes.array.isRequired,
};

Events.initialSearchState = {page: 1, perPage: 4};

export default Events;