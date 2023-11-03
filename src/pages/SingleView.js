import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
function SingleView() {
    //state
    const [AllData, setData] = useState([])
    //object for use Params
    const { id } = useParams()
    console.log(id);

    const fetchAllDatas = async () => {
        const result = await axios.get('/db.json')
        setData(result.data.contacts);
    }
    useEffect(() => {
        fetchAllDatas()
    }, [])
    console.log(AllData);
    //find object of particular item from array
    const singleData = AllData.find(i => i.id == id)
    console.log(singleData);
  return (
    <div>
{singleData &&
                <Row className='p-5'>
                    <Col className='p-5'>
                        <img style={{ height: '75%', width: '75%',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} src={singleData.profile} alt="profile" />
                    </Col>
                    <Col className='bg-primary' style={{height:'320px',position:'relative',top:'50px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <ListGroup className='fs-5  '>
                            <h1 className='mt-3'><b>{singleData.name}</b></h1>
                            <ListGroup.Item className=' mt-3 fs-3'><b><i class="fa-regular fa-envelope"></i>EMAIL:{singleData.email}</b></ListGroup.Item>
                            <ListGroup.Item className=' mt-3 fs-3 '><b><i class="fa-solid fa-mobile-screen-button"></i>MOBILE:{singleData.mobile}</b></ListGroup.Item>
                            <ListGroup.Item className=' mt-3 fs-3 '><b><i class="fa-solid fa-location-crosshairs"></i>LOCATION:{singleData.location}</b></ListGroup.Item> 
                            
                        </ListGroup>
                    </Col>
                </Row>
            }
    </div>
  )
}

export default SingleView