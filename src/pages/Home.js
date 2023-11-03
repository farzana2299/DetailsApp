import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from '../components/Cards'

function Home() {
    const [details,setDetails] = useState([])

    const fetchData = async () => {
        const result = await axios.get('/db.json')
        setDetails(result.data.contacts);
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(details);
  return (
    <div>
        <Container>
        <Row>
                    {
                        details.map(i => (
                            <Col className='ps-3 mt-3 p-2' lg={4} md={6} sm={12}>
                                <Cards item={i}></Cards>
                            </Col>
                        ))
                    }
                </Row>
                </Container>
    </div>
  )
}

export default Home