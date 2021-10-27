import React from 'react';
import {Card, Col,Row} from "react-bootstrap";
import  {Link} from "react-router-dom";

const City = ({city}) => {
    return (
        <>
            <Card className='my-3'>
                <Card.Header>{city.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{city.weather[0].description}</Card.Title>

                        <Row>
                            <Col md={6}>min temp: {city.main.temp_min}</Col>
                            <Col md={6}>max temp: {city.main.temp_max}</Col>
                        </Row>

                    <Link to={`/cities/${city.name},${city.coord.lat},${city.coord.lon}`}>More Details </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default City;