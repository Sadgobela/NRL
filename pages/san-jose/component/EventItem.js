import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Col} from "reactstrap";
import {Link} from '../../../routes';
import './EventItem.scss';

function EventItem({event}) {
    return (

        <Col lg={3}>
            <Link route={`/event/${event.id}`}>
                <Card>
                    <CardImg top width="100%" src={`${event.img}`} alt="image" />
                    <CardBody>
                        <CardTitle>{event.title}</CardTitle>
                        <CardText>
                            {event.short_description}
                        </CardText>
                        <CardText>
                            <p className="font-weight-bold text-right">{event.author}</p>
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
        </Col>

    );
}

export default EventItem;