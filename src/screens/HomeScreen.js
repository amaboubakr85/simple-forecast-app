import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import City from "../components/City";

const HomeScreen = () => {
    const {REACT_APP_API_KEY} = process.env;
    const lat = '36.7763035';
    const lon = '10.3157484';
    const [cities,setCities]=useState([]);
    const fetchAPI =async ()=>{
        // const lnk = `https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${REACT_APP_API_KEY}`
        const lnk = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=10&units=metric&appid=${REACT_APP_API_KEY}`
        const res = await axios.get(lnk)
        const {list} = await res.data;
        // console.log(list)
        setCities(list);

        return list;
    }

    useEffect( ()=>{
        fetchAPI()
        // console.log(cities)
    })
    return (
        <>
            <div className="App my-5">
                <Container>
                    <h1 className='mb-5'>Latest Forecast For Tunisia Cities Today </h1>
                    <Row>
                        {
                            cities.map(city=>(
                                <Col key={city.id} sm={12} md={6} lg={4} xs={12}>
                                    <City city={city}  />
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </div>
        </>
    );
};

export default HomeScreen;