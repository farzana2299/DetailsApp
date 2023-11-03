import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards({ item }) {
    return (
        <div>
            <Link to={`/view/${item.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.profile} />
                    <Card.Body>

                        <Card.Title><b className='fs-3'>{item.name}</b> </Card.Title>
                        

                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default Cards