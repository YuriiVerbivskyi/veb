import React, { useEffect, useState } from 'react';
import InfoItem from './InfoItem';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

function InfoList() {
    const [bosses, setBosses] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch('/bosses.json')
            .then(res => res.json())
            .then(setBosses)
            .catch(console.error);
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    {bosses.map((boss) => (
                        <Col key={boss.id} xs={12} sm={6} md={2} className="mb-4">
                            <InfoItem item={boss} onClick={setSelected} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={!!selected} onHide={() => setSelected(null)} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#222', color: '#fff' }}>
                    <Modal.Title>{selected?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#1c1c1c', color: '#f0e6d2' }}>
                    <img
                        src={selected?.image}
                        alt={selected?.name}
                        className="img-fluid mb-3"
                    />
                    <p>{selected?.lore}</p>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#222' }}>
                    <Button variant="outline-light" onClick={() => setSelected(null)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InfoList;
