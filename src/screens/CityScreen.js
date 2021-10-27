import React from 'react';
import {useState,useEffect} from "react";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import Loader from "../components/Loader";
import Day from "../components/Day";

const CityScreen = ({match}) => {
    const urlElms = match.params.name;
    const cityName = urlElms.split(',')[0];
    const lat = urlElms.split(',')[1];
    const lon = urlElms.split(',')[2];


   
    const [cityWeather, setCityWeather] = useState(null)
    // console.log('city:',cityName,'lat',lat,'lon',lon)
    // const unixDate = '1634838465';
    const {REACT_APP_API_KEY} = process.env;
    // const fetchUrl = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${unixDate}&appid=${REACT_APP_API_KEY}`
    const fetchUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${REACT_APP_API_KEY}`

    const fetchSingleCity = async () => {
        const res = await axios.get(fetchUrl);
        const data = await res.data

      return   setCityWeather(data)
        // console.log(data)


    }

    useEffect(() => {

      return   fetchSingleCity()

        // console.log(cityWeather)
    })


    // const imgIcon = `http://openweathermap.org/img/wn/${cityWeather.current.weather[0].icon}@2x.png`

    return !cityWeather ? (<Loader/>) : (<Container>
        <Row>
            <Col lg={12} md={12} sm={12}>
                <div className="head">
                    <h1>{cityName}</h1>
                    <h5>Forecast For Today</h5>

                    <img src={`http://openweathermap.org/img/wn/${cityWeather.current.weather[0].icon}@2x.png`}
                         alt="weather icon"/>
                    <Row className="mt-2">
                        <Col md={3} lg={3} sm={3}><span className='fw-bold'>Clouds:</span>{cityWeather.current.clouds}
                        </Col>
                        <Col md={3} lg={3} sm={3}><span
                            className='fw-bold'>humidity:</span>{cityWeather.current.humidity}</Col>
                        <Col md={3} lg={3} sm={3}><span
                            className='fw-bold'>pressure:</span>{cityWeather.current.pressure}</Col>
                        <Col md={3} lg={3} sm={3}><span
                            className='fw-bold'>Temperature:</span>{cityWeather.current.temp}</Col>
                    </Row>
                </div>

                <div className="days">
                    <Container>
                        <Row>
                            {
                                cityWeather.daily.slice(0, 8).map((item, index) => (
                                    <Col key={index} md={3} lg={3} sm={3}>
                                        <Day day={item}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </div>
            </Col>
        </Row>
    </Container>)

}
export default CityScreen;