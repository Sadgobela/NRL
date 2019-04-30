import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, CardSubtitle} from "reactstrap";
import {Link} from '../../../routes';
import './EventItem.scss';

function EventItem({event}) {
  return (
    <Col lg={3}>
      <Link route={`/event/${event.id}`}>
        <Card>
          <CardImg top width="100%" src={`${event.img}`} alt="image"/>
          <CardBody>
            <CardTitle><h4>{event.title}</h4></CardTitle>
            <CardSubtitle><h5>{event.sub_title}</h5></CardSubtitle>
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