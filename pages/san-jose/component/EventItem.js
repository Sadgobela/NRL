import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, CardSubtitle} from "reactstrap";
import {Link} from '../../../routes';
import './EventItem.scss';

function EventItem({event}) {
  return (
    <Col lg={6} sm={12} md={6} xl={3} xs={12}>
      <Link route={`/event/${event.id}`}>
        <Card className="event-item">
          <CardImg top width="100%" src={`${event.img}`} alt="image"/>
          <CardBody>
            <div className="event-item-attending d-flex justify-content-end">
              <div className="my-auto">Attending</div>
              <span className="d-flex justify-content-center my-auto ml-2">
                <span className="my-auto">{event.attend_count}</span>
              </span>
            </div>
            <CardTitle><h4>{event.title}</h4></CardTitle>
            <CardSubtitle>{event.sub_title}</CardSubtitle>
            <CardText>
              {event.short_description}
            </CardText>
            <CardText className="font-weight-bold text-right">
              {event.author}
            </CardText>
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
}

export default EventItem;