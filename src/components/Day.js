import React from 'react';
import {Card} from "react-bootstrap";

const Day = ({day}) => {
    let unixTime=day.dt;
    let date = new Date(unixTime*1000);
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    let formattedDate = date.toLocaleDateString("en-US",options)
    let getDay=formattedDate.split(',')[0]


    return (
        <>
            <Card className={'my-3 shadow'}>
                <Card.Body className="text-center">
                    <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`} alt="weather icon"/>
                    <Card.Title>{getDay} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{day.weather[0].description}</Card.Subtitle>
                    <div className="day-content">
                        <Card.Text><span className="fw-bold">Min Temperature :</span><span>{day.temp.min} C</span></Card.Text>
                        <Card.Text><span className="fw-bold">Max Temperature :</span><span>{day.temp.max} C</span></Card.Text>
                    </div>

                </Card.Body>
            </Card>
        </>
    );
};

export default Day;