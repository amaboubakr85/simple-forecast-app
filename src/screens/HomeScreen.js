import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import City from '../components/City'
import Loader from '../components/Loader'

const HomeScreen = () => {
  const { REACT_APP_API_KEY, REACT_APP_IP_KEY } = process.env
  // const lat = '36.7763035'
  // const lon = '10.3157484'

  const [cities, setCities] = useState([])
  const [mounted, setMounted] = useState(true)
  const [country, setCountry] = useState({})
  // const [lons, setLons] = useState('')
  // const [lats, setLats] = useState('')

  // const lat = lats
  // const lon = lons

  const fetchAPI = async (lat, lon) => {
    // const lnk = `https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${REACT_APP_API_KEY}`
    const lnk = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=10&units=metric&appid=${REACT_APP_API_KEY}`
    const res = await axios.get(lnk)
    const { list } = await res.data
    // console.log(list)
    return setCities(list)
  }

  useEffect(() => {
    // console.log(cities)
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // console.log('Latitude is :', position.coords.latitude)
        // console.log('Longitude is :', position.coords.longitude)

        mounted && fetchAPI(position.coords.latitude, position.coords.longitude)
      })
    }

    return () => setMounted(false)
  })

  const requestIP = () => {
    fetch(`http://api.ipstack.com/check?access_key=${REACT_APP_IP_KEY}`)
      .then((res) => res.json())
      .then((item) => setCountry(item))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    requestIP()
  }, [])

  return cities.length === 0 ? (
    <Loader />
  ) : (
    <>
      <div className='App my-5'>
        <Container>
          <h1 className='mb-5 text-center'>
            Latest Forecast For {country.country_name} Cities Today{' '}
          </h1>
          <h5 className='my-4' style={{ textAlign: 'center' }}>
            You Are in {country.city}
          </h5>
          <Row>
            <Col md={12} lg={12} sm={12}>
              <iframe
                width='100%'
                height='300'
                src={`https://maps.google.com/maps?q=${country.latitude},${country.longitude}&output=embed`}></iframe>
            </Col>
          </Row>
          <Row>
            {cities.map((city) => (
              <Col key={city.id} sm={12} md={6} lg={4} xs={12}>
                <City city={city} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HomeScreen
