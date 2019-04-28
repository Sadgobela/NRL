import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import './EventItem.scss';

function EventItem({event}) {
    return (

        <Col lg={3}>
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
        </Col>

    );
}

export default EventItem;