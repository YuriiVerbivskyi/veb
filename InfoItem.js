import React from 'react';
import { Card } from 'react-bootstrap';

function InfoItem({ item, onClick }) {
    return (
        <Card
            className="mb-4"
            onClick={() => onClick(item)}
            style={{
                backgroundColor: '#1c1c1c',
                color: '#f0e6d2',
                cursor: 'pointer',
                transition: '0.2s',
            }}
        >
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
                <Card.Title style={{ fontFamily: 'Cinzel, serif' }}>{item.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default InfoItem;
